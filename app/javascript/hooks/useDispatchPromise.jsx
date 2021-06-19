import * as React from "react";
import { useDispatch } from "react-redux";
import promiseDispatch from "../redux/helpers/promiseDispatch";

const useDispatchPromise = (requestService) => {
    const dispatch = useDispatch();

    const request = React.useCallback(async (...params) => {
        return await promiseDispatch(dispatch, requestService(...params));
    }, []);

    return { request };
};

export { useDispatchPromise };
