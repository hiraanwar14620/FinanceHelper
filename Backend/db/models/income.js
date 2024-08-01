import mongoose from '../db.js';

const IncomeModel = mongoose.model('Income', {
	amount: Number,
	description: String,
	date: Date
});

export default IncomeModel;
