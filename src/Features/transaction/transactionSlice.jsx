import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getTransactions
} from "./transactionApi";

const initialState = {
  transactions: [],
  isLoading: "false",
  isError: "false",
  error: ""
};
//  async thunks:
// get all transactions:

export const fetchTransactions = createAsyncThunk(
  "transaction/fetchTransactions",
  async () => {
    const transactions = await getTransactions();
    return transactions;
  }
);

// add transaction:
export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async data => {
    const transaction = await addTransaction(data);
    return transaction;
  }
);

// edit transaction:
export const updateTransaction = createAsyncThunk(
  "transaction/editTransaction",
  async ({ id, data }) => {
    const transaction = await editTransaction({ id, data });
    return transaction;
  }
);

// delete transaction:
export const removeTransaction = createAsyncThunk(
  "transaction/removeTransaction",
  async id => {
    const transaction = await deleteTransaction(id);
    return transaction;
  }
);

// slice creating:
export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isError = "false";
        state.isLoading = "true";
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isError = "false";
        state.isLoading = "false";
        state.transactions = action.payload;
      });
  }
});
