import express  from 'express';
import expenseRoutes from './routes/expense.js';
import incomeRoutes from './routes/income.js';
import  cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use('/api/expenses', expenseRoutes);
app.use('/api/incomes', incomeRoutes);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
})