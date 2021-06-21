import { takeLatest, call, all } from "redux-saga/effects";
import { COMPANIES } from "./companiesActions";
import { getAllClientsByCompanyId, getAllCompanies } from "./companiesServices";

function* getAll(action) {
    const { filters, resolve, reject } = action.payload;
    try {
        const response = yield call(getAllCompanies, filters);
        resolve(response);
    } catch (err) {
        reject(err);
    }
}

function* getAllClients(action) {
    const { id, filters, resolve, reject } = action.payload;

    try {
        const response = yield call(getAllClientsByCompanyId, id, filters);
        resolve(response);
    } catch (err) {
        reject(err);
    }
}

function* rootSaga() {
    yield all([
        takeLatest(COMPANIES.GET_ALL.REQUEST, getAll),
        takeLatest(COMPANIES.GET_ALL_CLIENTS.REQUEST, getAllClients),
    ]);
}

export default rootSaga;
