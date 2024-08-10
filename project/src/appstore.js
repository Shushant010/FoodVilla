import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore= configureStore({
  // one big reducer to have all mini reducers
  reducer:{
    cart: cartReducer,
  },
});

export default appStore; 