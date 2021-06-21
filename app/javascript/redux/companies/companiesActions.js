import { createAction } from "../helpers/createAction";
import { createTypes } from "../helpers/createTypes";

export const COMPANIES = createTypes(
    ["GET_ALL", "GET", "DELETE", "UPDATE", "GET_ALL_CLIENTS"],
    "COMPANIES"
);

export const ActionCompanies = {
    getAllRequest: (filters) =>
        createAction(COMPANIES.GET_ALL.REQUEST, { filters }),
    getAllClients: (id, filters) =>
        createAction(COMPANIES.GET_ALL_CLIENTS.REQUEST, { id: id, filters }),
};
