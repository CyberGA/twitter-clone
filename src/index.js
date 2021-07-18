import React from "react";
import { render } from "react-dom";
import 'normalize.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { GlobalStyles } from "./GlobalStyles";
import App from "./App";

library.add(faCheckSquare, faCoffee)

render(
  <React.StrictMode>
    <GlobalStyles />
      <App />
  </React.StrictMode>,
  document.getElementById("root")
);
