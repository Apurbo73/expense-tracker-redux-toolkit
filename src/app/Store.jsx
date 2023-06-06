import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../../src/Features/transaction/transactionSlice";
export const Store = configureStore({
  reducer: {
    transaction: transactionReducer
  }
});
