import { takeLatest, put, call, all } from "redux-saga/effects";
import { COMPANIES } from "./companiesActions";
import { getAllCompanies } from "./companiesServices";

function* getAll(action) {
    const { filters, resolve, reject } = action.payload;
    try {
        const response = yield call(getAllCompanies, filters);
        resolve(response);
    } catch (err) {
        reject(err);
    }
}

function* rootSaga() {
    yield all([takeLatest(COMPANIES.GET_ALL.REQUEST, getAll)]);
}

export default rootSaga;
