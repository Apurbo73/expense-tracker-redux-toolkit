import axios from "../../utils/axios";
//get :
export const getTransactions = async () => {
  const response = await axios.get("/transactions");
  return response.data;
};
// add:
export const addTransaction = async data => {
  const response = await axios.post("/transactions", data);
  return response.data;
};
//edit:
export const editTransaction = async (id, data) => {
  const response = await axios.put(`/transactions/${id}`, data);
  return response.data;
};
// delete:
export const deleteTransaction = async id => {
  const response = await axios.delete(`/transactions/${id}`);
  return response.data;
};
