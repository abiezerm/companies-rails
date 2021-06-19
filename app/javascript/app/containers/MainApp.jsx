import React from "react";
import { Route, Switch } from "react-router";
import App from "./App";

export default ({ match }) => {
    return (
        <Switch>
            {/* <Route path="/signin" component={<></>} /> */}
            <Route path={`${match.url}`} component={App} />
        </Switch>
    );
};
