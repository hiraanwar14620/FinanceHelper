import express from 'express';
import expenseRoutes from './routes/expense.js';
import incomeRoutes from './routes/income.js';
import cors from 'cors';
import config from './config.js';

const app = express();
const port = config.appPort;

app.use(express.json());
app.use(cors());
app.use('/api/expenses', expenseRoutes);
app.use('/api/incomes', incomeRoutes);

app.listen(port, () => {
	console.log(`Backend running on http://127.0.0.1:${port}/`);
});
