import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	service: 'Nameplate',
	customization: {
		design: {
			url: '',
		},
		material: {
			name: '',
			thickness: '',
			size: '',
		},
	},
	cost: {
		order: '400',
		delivery: '120',
		quantity: 1,
	},
	contact: {
		name: '',
		phone: '',
		email: '',
		address: '',
		city: '',
		state: '',
		zip: '',
	},
};

const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		clearOrder: () => initialState,
		setOrder: (state, action) => ({ ...state, ...action.payload }),
		setCustomizationMaterial: (state, action) => {
			state.customization.material = action.payload;
		},
		setCustomizationUrl: (state, action) => {
			state.customization.design.url = action.payload;
		},
		addDesign: (state, action) => {
			state.customization.design[action.payload.name].push(action.payload.data);
		},
		updateDesign: (state, action) => {
			state.customization.design[action.payload.name] = state.customization.design[
				action.payload.name
			].map((design) =>
				design.id === action.payload.id ? { ...design, ...action.payload.data } : design
			);
		},
	},
});

export const {
	clearOrder,
	setOrder,
	setCustomizationUrl,
	setCustomizationMaterial,
	addDesign,
	updateDesign,
} = orderSlice.actions;

export const getCustomization = (state) => state.order.customization;
export const getPrice = (state) => state.order.price;
export const getContact = (state) => state.order.contact;

export default orderSlice.reducer;
