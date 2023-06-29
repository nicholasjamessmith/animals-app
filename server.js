require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const Animal = require('./models/animals');
const app = express();

//Middleware
app.use(morgan('dev'));

//Routes
app.get('/', (req, res) => {
  res.send("Hello World!")
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`)
})