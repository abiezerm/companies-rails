import * as React from "react";
import AppLayout from "../../screens/AppLayout";
import { Route, Switch } from "react-router";
import CompaniesContainer from "./CompaniesContainer";
import ClientsContainer from "./ClientsContainer";

const App = ({ match }) => {
    return (
        <AppLayout>
            <Switch>
                <Route
                    path={`${match.url}companies`}
                    component={CompaniesContainer}
                />
                <Route
                    path={`${match.url}clients`}
                    component={ClientsContainer}
                />
            </Switch>
        </AppLayout>
    );
};

export default App;
