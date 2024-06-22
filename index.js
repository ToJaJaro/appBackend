const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config();

const userRouter = require('./routes/users');
const taskRouter = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/tasks', taskRouter);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
