import {combineReducers} from 'redux'
import geoData from './geoCodeReducer'

const rootReducer = combineReducers({
    geoData
})

export default rootReducer