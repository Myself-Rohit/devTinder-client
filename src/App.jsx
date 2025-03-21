import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
import Connections from "./components/Connections.jsx";
import Requests from "./components/Requests.jsx";
import Signup from "./components/Signup.jsx";
const App = () => {
	return (
		<Provider store={appStore}>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body />}>
						<Route path="/" element={<Feed />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/connections" element={<Connections />} />
						<Route path="/requests" element={<Requests />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer position="bottom-right" autoClose={3000} draggable />
		</Provider>
	);
};

export default App;
