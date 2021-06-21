import * as React from "react";
import AppLayout from "../../screens/AppLayout";
import { Route, Switch } from "react-router";
import CompaniesContainer from "./companies/CompaniesContainer";
import ClientsContainer from "./clients/ClientsContainer";
import CompaniesFormContainer from "./companies/CompaniesFormContainer";
import ClientsFormContainer from "./clients/ClientsFormContainer";

const App = ({ match }) => {
    return (
        <AppLayout>
            <Switch>
                <Route
                    path={`${match.url}companies/create`}
                    component={CompaniesFormContainer}
                />
                <Route
                    path={`${match.url}companies/:id`}
                    component={CompaniesFormContainer}
                />
                <Route
                    path={`${match.url}companies`}
                    exact
                    component={CompaniesContainer}
                />
                <Route
                    path={`${match.url}clients/create`}
                    component={ClientsFormContainer}
                />
                <Route
                    path={`${match.url}clients/:id`}
                    component={ClientsFormContainer}
                />
                <Route
                    path={`${match.url}clients`}
                    exact
                    component={ClientsContainer}
                />
            </Switch>
        </AppLayout>
    );
};

export default App;
