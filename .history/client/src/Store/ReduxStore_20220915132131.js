import {
	applyMiddleware, legacy_createStore as createStore
} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { reducers } from "../Reducer";

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
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))
const persistedState = loadFromLocalStorage();

const store = createStore(
	reducers,
	persistedState,
	composeEnhancers(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
