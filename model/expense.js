const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const Expense=sequelize.define('Expense',{//adding table column details
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    amount:Sequelize.STRING,
    desc:{
        type:Sequelize.STRING,
        //unique:true
        //if you give same data then it gives error
        //sqlMessage: "Duplicate entry 'a@g.com' for key 'users.email'", and backend crashes
        //now if you give correct data also then also db will not take since backend is crashed
        //in this case u should always use try catch
    },
    category:{
        type:Sequelize.STRING,
        
    },

})

module.exports=Expense