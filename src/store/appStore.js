import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice.js";
import feedReducer from "../slice/feedSlice.js";
import requestReducer from "../slice/requestSlice.js";

const appStore = configureStore({
	reducer: {
		user: userReducer,
		feed: feedReducer,
		request: requestReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});

export default appStore;
