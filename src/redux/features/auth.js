import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'apis/axios';
import { PERSIST_NAME } from 'config/data';
import { toast } from 'react-toastify';

export const authenticateUser = createAsyncThunk(
	'auth/authenticateUser',
	async (payload, { rejectWithValue }) => {
		const { method, endpoint, data } = payload;
		try {
			const res = await axios[method](`/${endpoint}`, data && { ...data });
			res.data?.message && toast.success(res.data?.message);
			return res.data;
		} catch (error) {
			if (!error.response) throw error;
			toast.error(error.response.data.message);
			return rejectWithValue(error.response.data);
		}
	}
);

const initialState = {
	loading: false,
	user: null,
	token: null,
};

export const authSlice = createSlice({
	name: 'Authentication',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(authenticateUser.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(authenticateUser.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload.user || null;
			state.token = action.payload.token || null;

			!action.payload.user
				? localStorage.removeItem(PERSIST_NAME)
				: localStorage.setItem(PERSIST_NAME, JSON.stringify(true));
		});
		builder.addCase(authenticateUser.rejected, (state, action) => {
			state.loading = false;
			state.user = null;
			state.token = null;
			action?.meta.arg.endpoint === 'refresh' && localStorage.removeItem(PERSIST_NAME);
		});
	},
});

export const LoginUser = (data) => authenticateUser({ method: 'post', endpoint: 'login', data });
export const RegisterUser = (data) =>
	authenticateUser({ method: 'post', endpoint: 'register', data });
export const RefreshToken = () => authenticateUser({ method: 'get', endpoint: 'refresh' });
export const LogoutUser = () => authenticateUser({ method: 'patch', endpoint: 'logout' });

export const loadingState = (state) => state.auth.loading;
export const getUser = (state) => state.auth.user;
export const getAcToken = (state) => state.auth.token;

export default authSlice.reducer;
