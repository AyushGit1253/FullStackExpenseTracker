const http = require('http');
const express = require('express');
const bodyParser=require('body-parser')
const expenseRoutes=require('./routes/expenseroutes')
const app = express();

const cors=require('cors')

const sequelize=require('./utils/database');
const User = require('./model/expense');

app.use(bodyParser.json({ extended: false }));

app.use(cors())

app.use('/expense',expenseRoutes )

sequelize.sync().then((result)=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})
