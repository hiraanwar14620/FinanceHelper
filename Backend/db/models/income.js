import mongoose from "mongoose";


const income = new mongoose.Schema({
  
  amount: Number,
  description: String,
  date: Date,
});

const incomeModel = mongoose.model("income",income);
export default incomeModel;