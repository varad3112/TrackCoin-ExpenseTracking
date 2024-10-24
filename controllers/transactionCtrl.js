const transactionModel = require('../models/transactionModel')
const moment = require('moment')

const getAllTransaction = async(req,res) =>{
    try {
        const {frequency,selectedDate,type} =req.body
        const transactions = await transactionModel.find({
            ...(frequency !== "custom"
            ?{
                date:{
                    $gt:moment().subtract(Number(frequency),'d').toDate(),
                },
            }
            :{ 
                date:{
                    $gte: selectedDate[0],
                    $lte:selectedDate[1],
                },
            }),
            userid:req.body.userid,
            ...(type != 'all' && {type})
        });
        res.status(200).json(transactions)
    
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
}
//router object
const addTransaction = async(req,res) => {
    try{
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save()
        res.status(201).send('Transaction Created')
    }catch(error){
        console.log(error)
        res.status(500).json(error)
    }
};


//router
//add transaction POST method
// router.post('/add transaction',addTransaction)

module.exports = {getAllTransaction,addTransaction};