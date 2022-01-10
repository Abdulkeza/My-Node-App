//EXPRESS

const express = require("express");

//middleware
const morgan = require("morgan");

//mongoose to access database

const mongoose = require("mongoose");

//import blog module
const { result } = require("lodash");

const blogRoutes = require('./routes/blogRoutes')

//!!Express app
const app = express();
// import router from './routes'
//!!connect to mongoDB

const dbURI =
  "mongodb+srv://ME:me12@adeoapp.ptq5s.mongodb.net/adeoDb?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });

//!!Register View engine

app.set("view engine", "ejs");

//!!Listen  for the request

// app.listen(5000);

// !!middleware for every single request && Static files

app.use(express.static("public")); //making this 'public' folder a public
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//!!Responding to the request
// app.use('/api/v1', router);
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

//!! (Routes) Displaying All blogs

// app.use('/blogs', blogRoutes)
app.use(blogRoutes)


//!!404  page

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//use() should be at the bottom of all other callbacks and it gonna be called if no matches.

//!!"/" is the location/path to respond, "req": contain the info of request, "res": we use it to send response

//u can set a folder of ur 'view engine' by ( app.set('views', 'myViews')) where myViews is the name of folder.
// res.send('<h1>Home of Express</h1>') ;
//sort({createdAt: -1}): this means the blogs will be displayed from the newest to the oldest
