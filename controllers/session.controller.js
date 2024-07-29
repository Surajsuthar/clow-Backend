const Session = require("../models/session")

const getSession = async (req,res) =>{
    const userId = req.userId
    const sessions = await Session.find({
        user:userId
    })
    res.status(200).json(sessions);
}

module.exports = getSession