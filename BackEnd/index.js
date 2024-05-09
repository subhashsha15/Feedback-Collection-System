const express = require("express");


const app = express();
app.use(express.json());

const port = 5000;
// mongodb://localhost:27017
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Feedback_Collection_System");
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("error occurred while connecting mongodb!", error)
    }
}

app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})