import React from "react"
import "./assets/styles/main.scss"
import ReactDOM from "react-dom"
import "./assets/styles/main.scss"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import { store } from "./store/store"
import { RootCmp } from "./root-cmp"
import 'animate.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RootCmp />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
