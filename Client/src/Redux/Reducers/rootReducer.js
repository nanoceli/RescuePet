import { combineReducers } from 'redux';
import { perros } from "./perros";
import { gatos } from "./gatos";
import { screenReducer } from './screen'



export const rootReducer = combineReducers({
    perros,
    gatos,
    screenReducer
});