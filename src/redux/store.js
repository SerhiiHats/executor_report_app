import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth.js";


const store = configureStore({
  reducer:{
    auth: authReducer,
  },
  devTools: authReducer
})

export default store;