import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
	name: "user",
	initialState: null,
	reducers: {
		addRequest: (state, action) => {
			return action.payload;
		},
		removeRequest: (state, action) => {
			return (state = state?.filter(
				(request) => request._id != action.payload
			));
		},
	},
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
