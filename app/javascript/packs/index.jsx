import React from "react";
import ReactDOM from "react-dom";
import MainApp from "../app/containers/MainApp";
import "styles/index.less";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import configureStore, { history } from "../redux/store";

const store = configureStore({});

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={MainApp} />
                </Switch>
            </ConnectedRouter>
        </Provider>,
        document.body.appendChild(document.createElement("div"))
    );
});
