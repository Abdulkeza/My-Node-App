import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

import blogRoutes from "./routes/blogRoutes.js";

const app = express(); //!!Express app

//!!connect to mongoDB

const dbURI =
  "mongodb+srv://ME:me12@adeoapp.ptq5s.mongodb.net/adeoDb?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    app.listen(5000, ()=>{console.log(`listenning on 5000`)});

    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

//!!Register View engine

app.set("view engine", "ejs");

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

//!!About page

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//!! ROUTES (Displaying All blogs)

app.use("/blogs", blogRoutes);

//!!404  page

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
