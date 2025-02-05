import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        counter: 0, 
        items: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.items.find((item) => item._id === action.payload._id);
            if (existingProduct) {
                existingProduct.quantity += 1; 
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.counter++; 
        },
        removeFromCart: (state, action) => {
            const existingProduct = state.items.find((item) => item._id === action.payload);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    existingProduct.quantity -= 1;
                } else {
                    state.items = state.items.filter((product) => product._id !== action.payload);
                }
                state.counter--; 
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
