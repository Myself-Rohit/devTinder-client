import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./store/appStore.js";
const App = () => {
	return (
		<Provider store={appStore}>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body />}>
						<Route path="/" element={<Feed />} />
						<Route path="/Login" element={<Login />} />
						<Route path="/profile" element={<Profile />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<ToastContainer />
		</Provider>
	);
};

export default App;
