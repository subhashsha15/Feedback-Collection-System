const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const usersRoute=require("./Routes/userRoute.js");

const app = express();
app.use(express.json());
dotenv.config();

const port = 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("error occurred while connecting mongodb!", error)
    }
}

app.use('/api/user', usersRoute);


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})


