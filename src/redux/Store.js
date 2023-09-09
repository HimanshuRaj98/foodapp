import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";
import CategorySlice from "./slices/CategorySlice";

const Store = configureStore({
  reducer: {
    cart: CardSlice,
    category: CategorySlice,
  },
});
export default Store;
