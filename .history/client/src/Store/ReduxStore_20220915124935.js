// this chunk of code, allows us to store the state from local computer
// so the state won't be deleted as we refresh the browser
import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore
} from "redux";
import thunk from "redux-thunk";
import { reducers } from "../Reducer";
// creating the redux store
const store = createStore( 
    reducers, 
    applyMiddleware(thunk) 
);

export default store;
