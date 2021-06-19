import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware({});

export const history = createBrowserHistory();

const routeMiddleware = routerMiddleware();

const middlewares = [routeMiddleware, sagaMiddleware];

const composeEnhancers =
    (typeof window !== "undefined" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const configureStore = (state) => {
    const store = createStore(
        createRootReducer(history),
        state,
        composeEnhancers(applyMiddleware(...middlewares))
    );
    sagaMiddleware.run(rootSaga, {});
    return store;
};

export default configureStore;
