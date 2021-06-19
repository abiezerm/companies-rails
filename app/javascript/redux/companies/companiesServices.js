import { restClient } from "../../utils/restClient";

export const getAllCompanies = (filters) => {
    let query = "";
    if (filters.page && filters.pageSize) {
        query = `?page=${filters.page}&pageSize=${filters.pageSize}`;
    }
    return restClient(`/api/v1/companies${query}`, "GET").then(
        (res) => res.data
    );
};
