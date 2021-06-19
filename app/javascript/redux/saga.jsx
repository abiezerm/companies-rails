import { all } from "redux-saga/effects";
import companiesSaga from "./companies/companiesSaga";

export default function* rootSaga(getState) {
    yield all([companiesSaga()]);
}
