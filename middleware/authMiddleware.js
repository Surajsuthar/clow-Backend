const supabase = require("../utils/supabase")
const User = require("../models/user")

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    //console.log(token)
    if (!token) {
        return res.status(401).json({ 
            error: 'No token provided' 
        });
    }

    const {data ,error} = await supabase.auth.getUser(token)

    if(error){
        console.log(error)
        return res.status(401).json({ 
            error: 'No token provided / user not found' 
        });
    }
    const email = data.user.email
    const user = await User.findOne({
        email
    })
    req.userId = user._id
    next()
}

module.exports = authMiddleware