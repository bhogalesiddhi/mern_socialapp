const express = require("express");
const cors = require('cors');
const app = express();

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgon = require("morgan");
const userRoute = require("./routes/users");
const authRouthe = require("./routes/auth");
const postRoute = require("./routes/posts");
dotenv.config();

const connectDatabase = () =>{
mongoose.connect(process.env.MONGO_URL).then(
    (data) => {
        console.log(`Mongodb connected with server`);
    }
);
}


app.use(cors());

connectDatabase();

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgon("common"));


app.use("/api/users",userRoute);
app.use("/api/auth",authRouthe);
app.use("/api/posts",postRoute);

app.listen(8800,()=>{
    console.log("Backend server is running!!");
})