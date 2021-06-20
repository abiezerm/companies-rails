import { all } from "redux-saga/effects";
import companiesSaga from "./companies/companiesSaga";
import clientsSaga from "./clients/clientsSaga";

export default function* rootSaga(getState) {
    yield all([companiesSaga(), clientsSaga()]);
}
