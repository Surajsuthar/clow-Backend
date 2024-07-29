const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const route = express.Router()
const {
    createEvent,
    getEvent,
    deleteEvent,
    updateEvent
} = require("../controllers/event.controller")

//middleware
route.post("/create",authMiddleware,createEvent)
route.get("/get",authMiddleware,getEvent)
route.put("/update/:id",authMiddleware,updateEvent)
route.delete("/delete/:id",authMiddleware,deleteEvent)

module.exports = route