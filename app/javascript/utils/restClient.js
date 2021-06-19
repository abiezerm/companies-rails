import axios from "axios";

export const restClient = async (
    route,
    method,
    data = undefined,
    params = undefined
) => {
    return axios({
        url: route,
        method: method,
        data: data,
        params: params,
        json: true,
    })
        .then((response) => {
            return Promise.resolve(response);
        })
        .catch((error) => {
            if (error.response) {
                return Promise.reject({
                    hasErorr: true,
                    code: error.response.status,
                });
            } else if (error.request) {
                return Promise.reject({
                    hasError: true,
                    code: 500,
                    message: "Internal error",
                });
            } else {
                return Promise.reject({
                    hasError: true,
                    code: 500,
                    message: "Unkown error",
                });
            }
        });
};
