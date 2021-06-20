import * as React from "react";
import AppLayout from "../../screens/AppLayout";
import { Route, Switch } from "react-router";
import CompaniesContainer from "./CompaniesContainer";

const App = ({ match }) => {
    return (
        <AppLayout>
            <Switch>
                <Route
                    path={`${match.url}companies`}
                    component={CompaniesContainer}
                />
            </Switch>
        </AppLayout>
    );
};

export default App;
