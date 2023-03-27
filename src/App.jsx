import React from "react";
import "./App.css";
import Builder from "./components/Builder/Builder";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Receipt from "./components/Receipt/Receipt";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route exact path="/" component={<Builder />} />
                <Route exact path="/receipt" component={<Receipt />} />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
