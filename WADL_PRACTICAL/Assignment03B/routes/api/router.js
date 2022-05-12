const express = require("express");
const router = express.Router();
const studentmarks = require("../../model/studentmarks");


// @API  : Add a student 
// @access : public 

router.post("/",async (req,res)=>{
    try{
        const {Name,Roll_No,WAD_Marks,CC_Marks,DSBDA_Marks,CNS_Marks,AI_Marks} = req.body;
        const studentMarks = new studentmarks({
            Name,Roll_No,WAD_Marks,CC_Marks,DSBDA_Marks,CNS_Marks,AI_Marks
        })
        await studentMarks.save();
        return res.status(200).json(studentMarks);
    }catch(error){
        console.log(error.message);
    }
})


// @API : Get students 

router.get("/",async (req,res)=>{
    try{
        const students = await studentmarks.find({});
        if(!students){
            return res.json(400).json({msg: "No Student Found"});
        }
        return res.json(students);
    }catch(error){
        console.log(error);
    }
})

router.get("/e",async(req,res)=>{
    try{
        const students = await studentmarks.find({}).where("DSBDA_Marks").gt(20).select("Name");
        // we need to return array of names 
        // try to convert the json object to array of names 
        var names = [];
        for(var obj in students){  ;
            names.push(students[obj].Name);
        }
        return res.status(200).json(names);
    }catch(error){
        console.log(error);
    }
})

router.put("/f:Roll_No",async(req,res)=>{

    try{
        // console.log(req.params);
        let student = await studentmarks.findOneAndUpdate({Roll_No:req.params.Roll_No},{
            WAD_Marks :10,
            CC_Marks :10 ,
            DSBDA_Marks : 10,
            CNS_Marks :10,
            AI_Marks :10 
        })
        if(!student){
            return res.status(400).json({msg:" No Student Found"});
        }
        return res.status(200).json(student);
    }catch(error){
        console.log(error);
    }
})
router.get("/g",async(req,res)=>{
    try{
        const students = await studentmarks.find({}).where("DSBDA_Marks").gt(25).where("CC_Marks").gt(25).where("AI_Marks").gt(25).where("CNS_Marks").gt(25).where("WAD_Marks").gt(25).select("Name");
        // we need to return array of names 
        // try to convert the json object to array of names 
        var names = [];
        for(var obj in students){  ;
            names.push(students[obj].Name);
        }
        return res.status(200).json(names);
    }catch(error){
        console.log(error);
    }
})

router.get("/h",async(req,res)=>{
    try{
        const students = await studentmarks.find({}).where("DSBDA_Marks").lt(25).where("WAD_Marks").lt(25).select("Name");
        var names = [];
        for(var obj in students){  ;
            names.push(students[obj].Name);
        }
        return res.status(200).json(names);
    }catch(error){
        console.log(error);
    }
})

router.delete("/i:Roll_No",async(req,res)=>{
    try{
        const student = await studentmarks.findOneAndDelete().where("Roll_No").equals(req.params.Roll_No);
        if(!student){
            return res.status(400).json({msg: "User does not exist "});
        }
        return res.status(200).json(student);
    }catch(error){
        console.log(error);
    }
})


//n
module.exports = router;    