import express from 'express';
import ExpenseModel from '../db/models/expense.js';
import mongoose from '../db/db.js';

const expenseRoutes = express.Router();

expenseRoutes.get('/', async (req, res) => {
	const expenses = await ExpenseModel.find();
	res.status(200).send(expenses);
});


expenseRoutes.get('/:id',async(req,res)=>{
	const id =  req.params.id;
	const expense = await ExpenseModel.findOne({
		_id: id
	});
	if (expense == null){
		return res.status (404);
	}
	return res.status(200).send(expense);
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
expenseRoutes.delete('/:id',async(req,res) =>{
	 const id =  req.params.id;
  await ExpenseModel.deleteOne({
	_id: id
	
  });
  res.status(200).send(true);
}
);

export default expenseRoutes;
