import express  from 'express';
import expenseRoutes from './routes/expense.js';
import  cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use("/api/",expenseRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})