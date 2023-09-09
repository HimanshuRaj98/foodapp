import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";
const Store = configureStore({
    reducer: {
        card: CardSlice,
    }
});
export default Store;
