import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import usersRouter from './routers/user.routes.js';  
import loginRouter from './routers/login.routes.js';
import contactRouter from './routers/contact.routes.js'
import conantRouter from './routers/conant.routes.js';
config(); 

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: 'POST, PATCH, GET, DELETE',
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/', contactRouter);
app.use('/', conantRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: err.message });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001...');
});
