import * as types from './actiontypes'

export function getGeoCode(location) {
    return function(dispatch) {
        dispatch(getGeoCodeSuccess(location))
    }
}

export function getGeoCodeSuccess(geoData) {
    return { types: types.GET_GEO_CODE_SUCCESS, geoData}
}