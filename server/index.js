import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import usersRouter from './routers/user.routes.js';  
import loginRouter from "./routers/login.routes.js";



config();
const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'POST, PATCH, GET, DELETE',
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/users', loginRouter);

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});