const express=require('express')

const router=express.Router()
const expensecontroller=require('../controller/expensecontroller')

//it was earlier app.post(.........)
//router.post('/user/add-user', usercontroller.addUser)//since app.js se /user aa rha n yaha bhi /user/add-user hoga
//toh 2 times /user/user/add-user ho jyega so use below
router.post('/add-expense',expensecontroller.addExpense)

router.get('/get-expense',expensecontroller.getExpense)

router.delete('/delete-expense/:id', expensecontroller.deleteExpense)

module.exports=router
