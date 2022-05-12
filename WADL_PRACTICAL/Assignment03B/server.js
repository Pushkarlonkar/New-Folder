

const express = require("express");
const app = express();
const connectDb = require("./db/db.js");
const studentRouter = require("./routes/api/router");
// connect to the database
connectDb();

// lets the server use json file 
app.use(express.json());

// API 
app.use("/students",studentRouter);

const PORT  = 3000 || process.env.PORT;
app.listen(3000,()=>{
    console.log(`Server has started on ${PORT}` );
})