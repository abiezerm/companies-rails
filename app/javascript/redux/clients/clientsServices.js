import { restClient } from "../../utils/restClient";

export const getAllClients = (filters) => {
    let query = "";
    if (filters.page && filters.pageSize) {
        query = `?page=${filters.page}&pageSize=${filters.pageSize}`;
    }
    return restClient(`/api/v1/clients${query}`, "GET").then((res) => res.data);
};

export const getClientById = (id) => {
    return restClient(`/api/v1/clients/${id}`, "GEt").then((res) => res.data);
};

export const editClientById = (id, data = undefined) => {
    return restClient(`/api/v1/clients/${id}`, "PUT", data).then(
        (res) => res.data
    );
};

export const addClient = (data) => {
    return restClient(`/api/v1/clients`, "POST", data).then((res) => res.data);
};

export const addAddressByClientId = (id, data) => {
    return restClient(`/api/v1/clients/${id}/addresses`, "POST", data).then(
        (res) => res.data
    );
};

export const deleteClientById = (id) => {
    return restClient(`/api/v1/clients/${id}`, "DELETE").then(
        (res) => res.data
    );
};
