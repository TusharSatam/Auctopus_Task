
import { combineReducers } from "redux";
import PostReducer from "./Post/PostReducer";
const rootReducer=combineReducers(
    {
        post:PostReducer,
    }
)

export default rootReducer