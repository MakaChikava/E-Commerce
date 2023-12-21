import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
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

                localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        removeFromCart(state, action){
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.id 
            )
            state.cartItems = nextCartItems
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        }

    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;