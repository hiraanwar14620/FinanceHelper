import mongoose from '../db.js';

const ExpenseModel = mongoose.model('Expense', {
	item: String,
	price: Number,
	quantity: Number,
	date: Date
});

export default ExpenseModel;
