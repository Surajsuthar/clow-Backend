const express = require("express")
const userRoute = require("./user.route")
const eventRoute = require("./event.route")
const sessionRoute = require("./session.route")
const route = express.Router()

route.use("/user",userRoute)
route.use("/event",eventRoute)
route.use("",sessionRoute)

module.exports = route