const {Schema,model}  = require("mongoose")

const studentSchema = new Schema({
    Name:{
        type : "String",
        required : true,
    },
    Roll_No : {
        type : "String",
        required : true,
        unique : true
    },
    WAD_Marks : {
        type : "Number",
    },
    CC_Marks : {
        type : "Number",
    },
    DSBDA_Marks : {
        type : "Number",
    },
    CNS_Marks : {
        type : "Number",
    },
    AI_Marks : {
        type : "Number",
    }
})

module.exports  = model("studentmarks",studentSchema);
