import * as React from "react";

const useFetch = (request, id = undefined) => {
    const [response, setResponse] = React.useState(undefined);

    const fetch = React.useCallback(async (id) => {
        const data = await request(id);
        setResponse(data.data);
        return data.data;
    }, []);

    React.useEffect(() => {
        id && fetch(id);
    }, []);

    return { data: response, fetch };
};

export { useFetch };
