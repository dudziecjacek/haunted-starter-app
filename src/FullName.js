import {
  html,
  component,
  useState,
  useEffect
} from "haunted";

function FullName(el) {
  const [first, setFirst] = useState("Happy");
  const [last, setLast] = useState("Halloween 🎃");

  useEffect(() => {
    const event = new CustomEvent('change', {
      detail: `${first}`
    });
    this.dispatchEvent(event);
  }, [first, last]);

  return html`
    <div class="container">
      <label for="first-name">First</label>
      <input
        value=${first}
        @keyup=${ev => setFirst(ev.target.value)}
        type="text"
        name="first"
        id="first-name"
      />
    </div>

    <style>
      .container {
        border: none;
        display: grid;
        grid-template-columns: 20% 80%;
      }

      input {
        border: 1px solid #e5e5e5;
        padding: 6px 10px;
        margin-bottom: 1em;
      }
    </style>
  `;
}

customElements.define("full-name", component(FullName));
