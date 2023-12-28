import { configureStore } from '@reduxjs/toolkit';
import auth from './features/auth';
import order from './features/order';

export default configureStore({
	reducer: {
		auth,
		order,
	},
});
