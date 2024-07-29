const User = require("../models/user")
const Session = require("../models/session")
const supabase = require("../utils/supabase")
const {
    userRegisterBody,
    userLoginBody
} = require("../utils/user.validation")



const register = async (req,res) => {
    const userInfo = userRegisterBody.safeParse(req.body)
    
    if (!userInfo.success) {
        return res.status(411).json({
            message: "Enter valid inputs Incorrect inputs"
        })
    }

    const {fullname, email, password} = req.body
    const {data, error} = await supabase.auth.signUp({ email:email, password:password });
    
    if(error){
        return res.status(411).json({
            message: error.message
        })
    }

    await User.create({
        fullname,
        email,
        password
    })

    res.status(201).json({
        message: 'User registered successfully'
    })
}

const login = async (req,res) => {
    const userInfo = userLoginBody.safeParse(req.body)
    console.log(req.body);
    if(!userInfo.success){
        return res.status(411).json({
            message: "Enter valid inputs Incorrect inputs"
        })
    }

    const {email, password} = req.body
    const {data ,error} = await supabase.auth.signInWithPassword({
        email:email,
        password:password
    })

    if(error){
        return res.status(411).json({
            message: error.message
        })
    }

    const user = await User.findOne({
        email
    })

    if(!user){
        return res.status(401).json({
            message:"user not found"
        })
    }

    await Session.create({
        user:user._id,
        ipAddress:req.socket.remoteAddress
    })

    res.status(201).json({
        token: data.session.access_token
    })
}

const logout = async (req,res) => {
    const userId = req.userId
    const session = await Session.findByIdAndUpdate(userId,{
        logout: Date.now()
    },{ new: true })
    res.status(200).json({ 
        message: 'Logout successful',
        "session":session
    });
}

module.exports ={
    login,
    register,
    logout
}