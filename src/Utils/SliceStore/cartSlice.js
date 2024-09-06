import { createSlice, current } from "@reduxjs/toolkit";
const cartSlice = createSlice({
	name: "cart",
	initialState: {
		items: [],
		dic: {},
		totalQty: 0,
	},
	reducers: {
		addItem: (state, action) => {


			state.totalQty += 1;
			state.dic[action.payload.card.info.id]
				? (state.dic[action.payload.card.info.id] += 1)
				: ((state.dic[action.payload.card.info.id] = 1),
				  state.items.push(action.payload));
		},
		removeItem: (state, action) => {
			if (state.dic[action.payload.card.info.id] > 1)
				state.dic[action.payload.card.info.id] -= 1;
			else if (state.dic[action.payload.card.info.id] === 1) {
				delete state.dic[action.payload.card.info.id];
				state.items = state.items.filter(
					(item) => item.card.info.id !== action.payload.card.info.id
				);
			}
			state.totalQty -= 1;
		},
		clearCart: (state) => {
			state.items = [];
			state.dic = {};
			state.totalQty = 0;
		},
	},
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
