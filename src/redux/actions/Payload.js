import Http from "../../utils/AxiosInstance";


export const getDropdownCountry = () => {
    return {
        type: "GET_DROPDOWN_COUNTRY",
        payload: new Promise((resolve, reject) => {
            Http.get(`/api/countries`)
                .then(response => resolve(response))
                .catch(error => {
                    reject(error)
                    alert("Failed to get data")
                });
        })
    };
};

export const getAllData = () => {
    return {
        type: "GET_DATA",
        payload: new Promise((resolve, reject) => {
            Http.get(`/api`)
                .then(response => resolve(response))
                .catch(error => {
                    reject(error)
                    alert("Failed to get data")
                });
        })
    };
};


export const getAllCountry = () => {
    return {
        type: "GET_COUNTRY",
        payload: new Promise((resolve, reject) => {
            Http.get(`/api/confirmed`)
                .then(response => resolve(response))
                .catch(error => {
                    reject(error)
                    alert("Failed to get data")
                });
        })
    };
};

export const getDataSelected = (urlAll, countryCode) => {
    return {
        type: "GET_DATA",
        payload: new Promise((resolve, reject) => {
            Http.get(urlAll)
                .then(response => resolve({ response, countryCode }))
                .catch(error => {
                    reject(error)
                    alert("Failed to get data")
                });
        })
    };
};


export const getCountrySelected = (urlCountry, countryCode) => {
    return {
        type: "GET_COUNTRY",
        payload: new Promise((resolve, reject) => {
            Http.get(urlCountry)
                .then(response => resolve({ response, countryCode }))
                .catch(error => {
                    reject(error)
                    alert("Failed to get data")
                });
        })
    };
};
