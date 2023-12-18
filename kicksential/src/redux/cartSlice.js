import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action){
// check if item already exists in cart to increase quantity
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
                );

            const tempProduct = {...action.payload, cartQuantity: 1}
            state.cartItems.push(tempProduct);
        },

    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;