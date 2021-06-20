import { restClient } from "../../utils/restClient";

export const getAllClients = (filters) => {
    let query = "";
    if (filters.page && filters.pageSize) {
        query = `?page=${filters.page}&pageSize=${filters.pageSize}`;
    }
    return restClient(`/api/v1/clients${query}`, "GET").then((res) => res.data);
};
