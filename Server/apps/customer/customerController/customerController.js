const {feedback,bloodGroup} = require('../../../data/models');
const { json } = require("body-parser");
const { QueryTypes } = require('sequelize');
//customer sending feedback(varsha)
module.exports.feedbackDetails = async(req,res)=>{

    const {description,date} = req.body;
    const feedbacks = await feedback.create({
      
        description:description,
        date:date,
        userId:1
        
    })
}

//customer requesting blood(joseph)
module.exports.requestBlood=async (req,res)=>{
        const{units,group}=req.body;

        // fetching the stock from the blood group table.
        let stockData=await bloodGroup.findOne({
            where:{group:group}
        })
        // partioning the stockdata for avaialable syock.

    let stockNow=stockData.dataValues.stock;
    if(units<=stockNow){
        console.log("stock avaialable")
        return
    }
    console.log("no stock")

}