const Expense = require('../model/expense')

const addExpense= async(req,res)=>{
    try{
        if(!req.body.desc){
            throw new Error('description is mandatory')
        }
        const amount = req.body.amount
        const desc = req.body.desc
        const category = req.body.category
        //User.create is promise based , it will take time,its async, once its successfully done, we get data
        //this data we send to frontend
        const data=await Expense.create({amount:amount,desc:desc,category:category})
        //used User.create so import models se user table
        res.status(201).json({expenseDetail:data})
    }
    catch(err){
    res.status(500).json({error:err})
    //now if u give duplicate values also backend will not crash and will give status 500 at frontend
    }
}

const getExpense= async(req, res) => {
    try{
    const users=await Expense.findAll()//User.findAll() for getting data from db
    res.status(200).json({allUsers:users})
    }
    catch(err){
    console.log('get user is failing',JSON.stringify(err)) 
    res.status(500).json({error:err})
    }
    }

const deleteExpense= async(req,res)=>{
    try{
    if(req.params.id=='undefined'){
        console.log('id is missing')
        res.status(400).json('id is missing')
    }
    const uid=req.params.id
    await Expense.destroy({where:{id:uid}})
    res.sendStatus(200)
    }
    catch(err){
    console.log(err)
    res.status(500).json(err)
    }
    }

module.exports={
    addExpense,
    getExpense,
    deleteExpense
}