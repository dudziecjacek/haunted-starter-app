import {
  html,
  component
} from "haunted";

function Drink({ drinks }) {
  const onAddClick = (drinks) => {
    const ingredients = [];
    Object.keys(drinks).forEach((key) => {
      if (key.includes('strIngredient') && !!drinks[key]) {
        ingredients.push(drinks[key])
      }
    })
    addIngredients(ingredients);
  }

  const addIngredients = (ingredients) => {
    const event = new CustomEvent('add-ingredients', {
      detail: { ingredients }
    });
    this.dispatchEvent(event);
  }

  return html`
  <div class="container">
    <img src=${drinks.strDrinkThumb}/>
    <div class="container__info">
      <h2 class="container__name">${drinks.strDrink}</h2>
      <p class="container__instructions">${drinks.strInstructions}</p>
      <button @click=${() => onAddClick(drinks)}>Add to shopping list</button>
    </div>
  </div>


  <style>
    .container {
      width: 600px;
      height: 200px;
      border: 1px solid white;
      display: flex;
      align-items: center;
      padding: 10px;
      box-sizing: border-box;
      margin-bottom: 20px;
    }

    .container__info {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .container__name {
      margin: 0;
    }

    .container__instructions {
      height: 100%;
      overflow-y: auto;
      margin: 5px 0;
    }

    img {
      width: auto;
      height: 100%;
      border: 1px solid white;
      margin-right: 10px;
    }
  </style>
  `
}

customElements.define("drink-result", component(Drink));