import { takeLatest, put, call } from "redux-saga/effects";
import { ActionCompanies, COMPANIES } from "./companiesActions";
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
    yield takeLatest(COMPANIES.GET_ALL.REQUEST, getAll);
}

export default rootSaga;
