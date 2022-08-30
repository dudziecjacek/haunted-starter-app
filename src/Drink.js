import {
  html,
  component
} from "haunted";

function Drink(props) {

  return html`
  <pre>
    ${JSON.stringify(props.listDrinks, null, 2)}
  </pre>
  `
}

customElements.define("drink-result", component(Drink));