const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description :{
        type:String,
        require:true
    },
    date:{
        type:Date,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

const Event = mongoose.model("Event",eventSchema)

module.exports = Event