const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
mongoose.set('strictQuery', true);

dotenv.config();
const usersRoute = require("./Routes/userRoute.js");
const formRoute = require("./Routes/Form.Route.js")
const dashboardRoute = require("./Routes/dashBoard.Route.js")

const cors = require('cors');
const app = express();

// const allowedOrigin = 'https://kaleidoscopic-cobbler-17f567.netlify.app';
// const allowedOrigin = 'http://localhost:5173';

// app.use(cors({
//   origin: function(origin, callback){
//     // Allow requests with no origin, like mobile apps or curl requests
//     if(!origin) return callback(null, true);
//     if(origin !== allowedOrigin){
//       const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));
//Middlewares
// const allowedOrigins = ['http://localhost:5173', 'https://kaleidoscopic-cobbler-17f567.netlify.app','https://scdfv2l4-5173.inc1.devtunnels.ms'];
const allowedOrigins = 'https://kaleidoscopic-cobbler-17f567.netlify.app';

app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin, like mobile apps or curl requests
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(express.json());

const port = 5000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT);
        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log("error occurred while connecting mongodb!", error)
    }
}

app.use('/feedback/api/user', usersRoute);
app.use('/feedback/api/form', formRoute);
app.use('/feedback/api', dashboardRoute);


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`); 
}) 
