export const createTypes = (types, module) => {
    return Object.values(types).reduce((acumm, currentValue) => {
        acumm[currentValue] = {
            PROCESSING: `${module}_${currentValue}_PROCESSING`,
            REQUEST: `${module}_${currentValue}_REQUEST`,
            SUCCESS: `${module}_${currentValue}_SUCCESS`,
            ERROR: `${module}_${currentValue}_ERROR`,
        };
        return acumm;
    }, {});
};
