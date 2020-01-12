const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require("body-parser");
const cors = require("cors");

// Cors middleware

app.use(cors());

// Body Parser

app.use(bodyParser.json());

// Import routes

const postsRoute = require("./routes/posts");

// Middleware

app.use("/posts", postsRoute);

// Routes
app.get("/", (req, res) => {
    res.send("Hello Home Route");
});


// Connect to Database
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Connected to Database");
    }
);

// To listen on the server
app.listen(3000);