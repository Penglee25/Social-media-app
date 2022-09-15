// this chunk of code, allows us to store the state from local computer
// so the state won't be deleted as we refresh the browser
import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore
} from "redux";
import { reducers } from "../Reducer";
import ReduxThunk from 'redux-thunk';
const middlewares = [ReduxThunk];

function saveToLocalStorage(store) {
	try {
		const serializedStore = JSON.stringify(store);
		window.localStorage.setItem("store", serializedStore);
	} catch (e) {
		console.log(e);
	}
}

function loadFromLocalStorage() {
	try {
		const serializedStore = window.localStorage.getItem("store");
		if (serializedStore === null) return undefined;
		return JSON.parse(serializedStore);
	} catch (e) {
		console.log(e);
		return undefined;
	}
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(
	reducers,
	persistedState,
	composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
