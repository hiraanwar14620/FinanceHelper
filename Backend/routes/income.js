import express from 'express';
import IncomeModel from '../db/models/income.js';

const incomeRoutes = express.Router();

incomeRoutes.get('/', async (req, res) => {
	const income = await IncomeModel.find();
	return res.status(200).send(income);
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

export default incomeRoutes;
