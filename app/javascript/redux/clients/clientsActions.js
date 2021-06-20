import { createAction } from "../helpers/createAction";
import { createTypes } from "../helpers/createTypes";

export const CLIENTS = createTypes(["GET_ALL", "GET"], "CLIENTS");

export const ClientsActions = {
    getAll: (filters) => createAction(CLIENTS.GET_ALL.REQUEST, { filters }),
};
