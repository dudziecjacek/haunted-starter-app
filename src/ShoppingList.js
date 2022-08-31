import {
  html,
  component
} from "haunted";

function ShoppingList({ ingredientsList }) {
  const onPrintClick = () => {
    const printWindow = window.open('', '', 'height=1080, width=1920');
    printWindow.document.write('<h3>Your Shopping List</h3>');
    this.shadowRoot.querySelectorAll('li').forEach(node =>  printWindow.document.write(`<p>• ${node.textContent}</p>`));

    printWindow.document.close();
    printWindow.print();

  }

  return html`
    <div>
      <h3>Shopping List</h3>
        ${ingredientsList.length > 0 ? 
          html`<ul>${ingredientsList.map(ingredient => html`<li>${ingredient}</li>`)}</ul>
          <button @click=${() => onPrintClick()}>Print</button>`: 
          html`<p>Shopping list is empty...</p>`}
    </div>
    <style>
      div {
        width: 300px;
        border: 1px solid white;
        padding: 10px;
        margin-left: 20px;
      }

      h3 {
        margin: 0;
      }

      p {
        margin-bottom: 0;
      }

      ul {
        padding-inline-start: 20px;
      }
    </style>
  `
}

customElements.define("shopping-list", component(ShoppingList));