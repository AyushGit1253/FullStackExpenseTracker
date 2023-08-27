const Sequelize=require('sequelize')
const sequelize=new Sequelize('expenseproject','root','root',{
    dialect:'mysql',
    host:'localhost'
})

module.exports=sequelize