import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice.js";
import feedReducer from "../slice/feedSlice.js";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		feed: feedReducer,
	},
});

export default appStore;
