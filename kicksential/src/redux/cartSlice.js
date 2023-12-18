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
            // find duplicate product index
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
                );
                
                // check if item already exists in cart to increase quantity
                if(itemIndex >=0){
                    state.cartItems[itemIndex].cartQuantity += 1
                } else{
                    const tempProduct = {...action.payload, cartQuantity: 1}
                    state.cartItems.push(tempProduct);
                }

                state.cartTotalAmount = state.cartItems.length // work on this
        },

    }
})

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;