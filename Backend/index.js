import express from 'express';
import cors from 'cors';
import expenseRoutes from './routes/expense.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use('/api/expenses', expenseRoutes);

app.listen(port, () => {
	console.log(`app running at http://127.0.0.1:${port}/`);
});
