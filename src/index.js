import {
  html,
  component,
  useState,
} from "haunted";
import "./FullName.js";
import "./SearchInput.js";
import "./Drink.js";
import { nothing } from 'lit';
import { until } from 'lit/directives/until.js';

function App() {
  const [name, setName] = useState("");
  const [results, setResults] = useState("");

  const onSearch = async (query) => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .then(res => res.json())
      .then(data => setResults(data.drinks))
  }

  return html`
    <h2>User Page</h2>

    <h3>${name}</h3>

    <fieldset>
      <legend>Change name:</legend>
      <full-name @change=${ev => setName(ev.detail)}></full-name>
    </fieldset>

    <search-input @init-search=${event => onSearch(event.detail.query)}></search-input>
    <br>
    

    ${results ? results.map(result => html`<drink-result .listDrinks=${result}></drink-result>`) : nothing}

    <style>
    fieldset {
    border: none;
    }

    legend {
      padding: 0;
      margin - bottom: 0.5rem;
    }
    </style>
    `;
}

customElements.define("my-app", component(App));

// ${results ? html`<drink-result .listDrinks=${results}></drink-result>` : nothing}    