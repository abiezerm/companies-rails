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

export const getCompanyById = (id) => {
    return restClient(`/api/v1/companies/${id}`, "GET").then((res) => res.data);
};

export const editCompanyById = (id, data = undefined) => {
    return restClient(`/api/v1/companies/${id}`, "PUT", data).then(
        (res) => res.data
    );
};

export const addCompany = (data) => {
    return restClient(`/api/v1/companies`, "POST", data).then(
        (res) => res.data
    );
};

export const getAllClientsByCompanyId = (id, filters) => {
    let query = "";
    if (filters.page && filters.pageSize) {
        query = `?page=${filters.page}&pageSize=${filters.pageSize}`;
    }

    return restClient(`/api/v1/companies/${id}/clients${query}`, "GET").then(
        (res) => {
            return res.data;
        }
    );
};

export const companyDeleteById = (id) => {
    return restClient(`/api/v1/companies/${id}`, "DELETE").then(
        (res) => res.data
    );
};
