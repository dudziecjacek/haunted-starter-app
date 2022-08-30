import {
  html,
  component,
  useState,
  useEffect
} from "haunted";

function SearchInput(_el) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const event = new CustomEvent('change', {
      detail: `${query}`
    });
    this.dispatchEvent(event);
  }, [query]);

  const initSearch = () => {
    const event = new CustomEvent('init-search', {
      detail: { query }
    });
    this.dispatchEvent(event);
  }

  return html`
  <input
    value=${query}
    type="text"
    name="query"
    @keyup=${ev => setQuery(ev.target.value)}
  />
  <button @click=${initSearch}>Search</button>
  `
}

customElements.define("search-input", component(SearchInput));

SearchInput.observedAttributes = ['query'];