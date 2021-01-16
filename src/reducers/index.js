import {combineReducers} from "redux";
import {gitDataReducer} from "./gitData.reducer"

export default combineReducers({
    gitDataReducer:gitDataReducer
})