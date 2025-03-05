import { createSlice } from "@reduxjs/toolkit";

const initState = {
    restaurants : [],
    reviews: [],
    cart: []
};

const productsSlice = createSlice({
    name: 'PRODUCTS',
    initialState: initState,
    reducers: {
        addRestaurants: (state, action) => {
            state.restaurants = action.payload;
        },
        addReviews: (state, action) => {
            state.reviews = action.payload;
        },
        addCart: (state, action) => {
            state.cart = action.payload;
        }
    }
});

export const { addRestaurants, addReviews, addCart } = productsSlice.actions;

export default productsSlice.reducer;