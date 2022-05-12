require("dotenv").config();

const mongoose = require("mongoose");
const mongoURI = process.env.DATABASE_URI;

const connectDb = async()=>{
    try{
        console.log(mongoURI);
        await mongoose.connect(mongoURI);
        console.log("Database Connected");
    }catch(error){
        console.log("Error Message :" ,error);
    }
}

module.exports = connectDb;