
const express = require("express");
const path = require("path");  
const mongoose = require( 'mongoose' );
const debug = require("debug")("personalapp:server"); 
const layouts = require("express-ejs-layouts");
const axios = require("axios")
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("dotenv").config()



// const ToDoItem = require("./models/ToDoItem")
// const Course = require('./models/Course')
// const Schedule = require('./models/Schedule')



// connect to mongodb

mongoose.connect( process.env.mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((e) => {
        console.log(e, 'Failed to connect MongoDB');
    });







const app = express();


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(layouts);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.secret,
    resave: false,
    saveUninitialized: false
  })
);


// App
