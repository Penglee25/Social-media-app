import "./App.css";
import Auth from "./Pages/Auth/Auth";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div className="blur" style={{ top: "-18%", right: "0" }}></div>
			<div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
			<Auth/>
		</div>
	);
}

export default App;
