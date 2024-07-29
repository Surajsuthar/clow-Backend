require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const allRoute = require("./routes/index")
const cors = require("cors")
const app = express()

mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("Db connected"))
        .catch((err) => console.log(err))


app.use(cors())
app.use(express.json())
app.use("/api/v1",allRoute)

app.get("*", (req, res)=>{
    res.send("<h1>Invalid Page</h1>");
});

const PORT = process.env.PORT || 5050
app.listen(PORT,() => {
    console.log(`app is listing http://localhost:${PORT}`)
})