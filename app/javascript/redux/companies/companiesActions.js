import { createAction } from "../helpers/createAction";
import { createTypes } from "../helpers/createTypes";

export const COMPANIES = createTypes(
    ["GET_ALL", "GET", "DELETE", "UPDATE"],
    "COMPANIES"
);

export const ActionCompanies = {
    getAllRequest: (filters) =>
        createAction(COMPANIES.GET_ALL.REQUEST, { filters }),
};
