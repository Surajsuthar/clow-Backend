const Event = require("../models/event")

const createEvent = async (req,res) => {
    const {name , description, date, location } = req.body
    await Event.create({
        name,
        description,
        date,
        location,
        user:req.userId
    })

    res.status(201).json({
        message:"Event created!!"
    })
}

const getEvent = async (req,res) => {
    const userId = req.userId
    const events = await Event.find({
        user:userId
    })
    res.status(200).json(events)
}

const deleteEvent = async (req,res) => {
  const { id } = req.params;
  console.log(id);
  await Event.findByIdAndDelete(
    id
  )
  res.status(200).json({ message: 'Event Deleted successfully' });
}

const updateEvent = async (req,res) => {
    const { id } = req.params;
    const { name, date, location, description } = req.body;
    await Event.findByIdAndUpdate(id, { 
        name, 
        date, 
        location, 
        description 
    },{ new: true });
    res.status(200).json({ 
        message: 'Event updated successfully' 
    });
}

module.exports = {
    createEvent,
    getEvent,
    deleteEvent,
    updateEvent
}