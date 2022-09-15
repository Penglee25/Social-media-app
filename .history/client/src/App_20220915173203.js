import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";

function App() {
	const user = useSelector((state) => state.authReducers.authData);
	return (
		<div className="App">
			<div className="blur" style={{ top: "-18%", right: "0" }}></div>
			<div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
			<Routes>
				<Route path="/" element={user? <Navigate to = "Home" /> : <Navigate to = "Auth" />} />
				<Route path="/" element={user? <Home/> : <Navigate to = "../Auth" />} />
				<Route path="/" element={user? <Navigate to = "../Home" /> : <Auth/>} />
			</Routes>
		</div>
	);
}

export default App;
