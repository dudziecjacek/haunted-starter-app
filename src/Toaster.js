import {
  html,
  component,
  useEffect,
  useState
} from "haunted";
import { nothing } from 'lit';

function Toaster(props) {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setIsDisplayed(!!props.message);
    setTimeout(() => {
      setIsDisplayed(false)
    }, 3000);
  }, [props.message]);
  

  return html`
  ${isDisplayed ?
    html`<div><p>${props.message}</p></div>` :
    nothing
  }

  <style>
    div {
      width: 250px;
      height: 50px;
      background-color: black;
      border: 1px solid white;
      position: fixed;
      bottom: 25px;
      right: 25px;
      z-index: 9999;
    }

    p {
      text-align: center;
    }

    
  </style>
  `
}

customElements.define("app-toaster", component(Toaster));