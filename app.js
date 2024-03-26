require('dotenv').config()
const express = require('express')
const app = express();
const cors = require("cors");


const userRouter = require('./api/users/user.router');
const AppError = require('./utils/appError');
app.use(cors());
app.use(express.json());

app.use('/api/users', userRouter);

app.all('*', (req, res, next)=>{
  const err = new AppError(`Requested URL ${req.path} not found!`, 404);
  next(err)
  
})

app.use((err, req, res, next)=>{
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: 0,
    message: err.message,
    stack: err.stack
  })
})


app.listen(process.env.APP_PORT, () => {
  console.log(`Server is up and running on ${process.env.APP_PORT}`);
});

