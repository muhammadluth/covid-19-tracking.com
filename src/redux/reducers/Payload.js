const initialStateDropdownCountry = {
    dropdownCountry: [],
    isLoading: true,
    isFulfilled: false,
    isRejected: false
}

const initialStateData = {
    data: [],
    country: "allcountry",
    isLoading: true,
    isFulfilled: false,
    isRejected: false
}

const initialStateDataCountry = {
    dataCountry: [],
    country: "allcountry",
    mapLat: -6.117664,
    mapLong: 106.906349,
    mapZoom: 0,
    isLoading: true,
    isFulfilled: false,
    isRejected: false
}


export const dropdownCountry = (state = initialStateDropdownCountry, action) => {
    switch (action.type) {
        case 'GET_DROPDOWN_COUNTRY_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_DROPDOWN_COUNTRY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_DROPDOWN_COUNTRY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                dropdownCountry: action.payload.data.countries
            }
        default:
            return state
    }
}

export const data = (state = initialStateData, action) => {
    switch (action.type) {
        case 'GET_DATA_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_DATA_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_DATA_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                country: action.payload.countryCode,
                data: action.payload.data === undefined ? action.payload.response.data : action.payload.data
            }
        default:
            return state
    }
}

export const dataCountry = (state = initialStateDataCountry, action) => {
    switch (action.type) {
        case 'GET_COUNTRY_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_COUNTRY_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true
            }
        case 'GET_COUNTRY_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isFulfilled: true,
                country: action.payload.countryCode,
                mapLat: action.payload.response === undefined ? -6.117664 : action.payload.response.data[0].lat,
                mapLong: action.payload.response === undefined ? 106.906349 : action.payload.response.data[0].long,
                mapZoom: action.payload.response === undefined ? 3 : 4,
                dataCountry: action.payload.data === undefined ? action.payload.response.data : action.payload.data
            }
        default:
            return state
    }
}