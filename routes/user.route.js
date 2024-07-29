const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const route = express.Router()
const {
    login,
    register,
    logout } = require("../controllers/user.controller")

route.post("/login",login)
route.post("/register",register)
route.post("/logout",authMiddleware,logout)

module.exports = route