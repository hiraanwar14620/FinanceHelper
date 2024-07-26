import express  from 'express';
import mongoose from 'mongoose';
import expenseModel from '../entities/expense.js';

const app = express();
const expenseRoutes = express.Router();

expenseRoutes.get('/expense', (req, res) => {
  res.send('Hello World!');
})

expenseRoutes.post("/expense",async (req, res) =>
{
    mongoose.connect("mongodb://localhost:27017/FinanceHelper")
    const income = new expenseModel({
        item : req.body.item,
        price : req.body.price,
        quantity : req.body.quantity,
        date : req.body.date,

    });
    await income.save();
    res.status(200).send();

})

export default expenseRoutes;

