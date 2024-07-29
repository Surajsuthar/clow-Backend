const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const route = express.Router()
const getSession = require("../controllers/session.controller")

//middleware
route.get("/session",authMiddleware,getSession)

module.exports = route