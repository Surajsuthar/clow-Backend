const mongoose = require("mongoose")

const sessionSchema = mongoose.Schema({
    login:{
        type:Date,
        require:true,
        default:Date.now
    },
    logout:{
        type:Date,
        require:true
    },
    ipAddress:{
        type:String,
        require:true,
    },
    user :{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Session = mongoose.model("Session",sessionSchema)

module.exports = Session