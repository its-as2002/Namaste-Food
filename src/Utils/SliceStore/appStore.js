import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../SliceStore/cartSlice";
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default appStore;