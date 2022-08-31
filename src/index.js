import {
  html,
  component,
  useState,
} from "haunted";
import "./FullName.js";
import "./SearchInput.js";
import "./Drink.js";
import "./Toaster.js";
import "./ShoppingList.js";
import { nothing } from 'lit';

function App() {
  const [results, setResults] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const endpoint = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const [ingredientsList, setIngredientsList] = useState([]);

  const onSearch = (query) => {
    setToastMessage('Searching...');
    fetch(`${endpoint}${query}`)
      .then(res => res.json())
      .then(data => { 
        setResults(data.drinks); 
        if (!data.drinks) {
          setToastMessage('No results found.')
          return;
        }
        setToastMessage('Here are the results.') })
  }

  const onAddIngredients = (newIngredients) => {
    const ingredientsToAdd = ingredientsList;

    newIngredients.forEach(ingredient => {
      if (!ingredientsList.includes(ingredient)) {
        ingredientsToAdd.push(ingredient)
      }
    })

    setIngredientsList([...ingredientsList]);
  }


  return html`
    <search-input @init-search=${event => onSearch(event.detail.query)}></search-input>
    <br>
    

    <div class="container">
      <div class="drinks-list">
        ${results ? 
          results.map(result => html`<drink-result @add-ingredients=${event => onAddIngredients(event.detail.ingredients)} .drinks=${result}></drink-result>`) : 
          nothing}
      </div>
      <shopping-list .ingredientsList=${ingredientsList}></shopping-list>
    </div>


    <app-toaster .message=${toastMessage}></app-toaster>

    <style>
      fieldset {
        border: none;
      }

      .container {
        display: flex;
        justify-content: center;
      }
    </style>
    `;
}

customElements.define("my-app", component(App));

// ${results ? html`<drink-result .listDrinks=${results}></drink-result>` : nothing}    

// ${toastMessage ?
//   html`<app-toaster .message=${toastMessage}></app-toaster>` :
//   nothing
// }