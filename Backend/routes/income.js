import express  from 'express';
import incomeModel from '../db/models/income.js';


const incomeRoutes = express.Router();

incomeRoutes.get('/',async (req, res) => {
const income = await incomeModel.find();
  return res.status(200).send(income);
})

incomeRoutes.post('/',async (req, res) =>
{
    const income = new incomeModel({
        amount : req.body.amount,
        description : req.body.description,
        date : req.body.date,

    });
    
    income = await incomeModel.create(income);
	res.status(200).send(income);

})

export default incomeRoutes;