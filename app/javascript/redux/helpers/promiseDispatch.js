export default (dispatch, fn) =>
    new Promise((resolve, reject) => {
        const payload = {
            ...fn,
            payload: {
                ...fn.payload,
                reject: reject,
                resolve: resolve,
            },
        };

        return dispatch(payload);
    });
