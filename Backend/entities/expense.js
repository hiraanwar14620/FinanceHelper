import mongoose from "mongoose";


const expense = new mongoose.Schema({
  item: String,
  price: Number,
  quantity: Number,
  date: Date,
});

const expenseModel = mongoose.model("expense",expense);
export default expenseModel;