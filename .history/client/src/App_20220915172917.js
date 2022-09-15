import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/Auth/Auth";

function App() {
	const user = useSelector((state) => state.authReducers.authData);
	return (
		<div className="App">
			<div className="blur" style={{ top: "-18%", right: "0" }}></div>
			<div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
			<Auth/>
			<Routes>
			<Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
			</Routes>
		</div>
	);
}

export default App;
