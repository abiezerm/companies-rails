import { all, call, takeLatest } from "redux-saga/effects";
import { CLIENTS } from "./clientsActions";
import { getAllClients } from "./clientsServices";

function* getAll(action) {
    const { filters, resolve, reject } = action.payload;
    try {
        const response = yield call(getAllClients, filters);
        resolve(response);
    } catch (err) {
        reject(err);
    }
}
function* rootSaga() {
    yield all([takeLatest(CLIENTS.GET_ALL.REQUEST, getAll)]);
}

export default rootSaga;
