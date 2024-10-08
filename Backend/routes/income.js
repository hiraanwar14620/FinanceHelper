import express from 'express';
import IncomeModel from '../db/models/income.js';

const incomeRoutes = express.Router();

incomeRoutes.get('/', async (req, res) => {
	const income = await IncomeModel.find();
	return res.status(200).send(income);
});

incomeRoutes.get('/:id', async (req, res) => {
	const id = req.params.id;
	const expense = await ExpenseModel.findOne({
		_id: id
	});
	if (expense == null) {
		return res.status(404);
	}
	return res.status(200).send(expense);
});

incomeRoutes.post('/', async (req, res) => {
	let income = new IncomeModel({
		amount: req.body.amount,
		description: req.body.description,
		date: req.body.date
	});

	income = await IncomeModel.create(income);
	res.status(200).send(income);
});

incomeRoutes.put('/:id', async (req, res) => {
	const id = req.params.id;
	const result = await IncomeModel.updateOne(
		{ _id: id },
		{
			$set: {
				amount: req.body.amount,
				description: req.body.description,
				date: req.body.date
			}
		}
	);
	if (result.matchedCount == 0) {
		return res.status(404);
	}
	return res.status(200).send(result);
});

incomeRoutes.delete('/:id', async (req, res) => {
	const id = req.params.id;
	await IncomeModel.deleteOne({
		_id: id
	});
	res.status(200).send(true);
});

export default incomeRoutes;
