import express from 'express';
import ExpenseModel from '../db/models/expense.js';

const expenseRoutes = express.Router();

expenseRoutes.get('/', async (req, res) => {
	const expenses = await ExpenseModel.find();
	res.status(200).send(expenses);
});

expenseRoutes.post('/', async (req, res) => {
	let expense = new ExpenseModel({
		item: req.body.item,
		price: req.body.price,
		quantity: req.body.quantity,
		date: req.body.date
	});

	expense = await ExpenseModel.create(expense);
	res.status(200).send(expense);
});

export default expenseRoutes;
