import * as types from '../actions/actiontypes'
import initialState from './initialState'

export default function getGeoDataReducer(state = initialState.geoData, action) {
    switch(action.types) {
        case types.GET_GEO_CODE_SUCCESS:
            return action.geoData
        default:
            return state;
    }
}