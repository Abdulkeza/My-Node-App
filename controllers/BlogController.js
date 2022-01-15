import Blog from "../models/blog.js";
// var Blog = require("../models/blog");

//blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

export const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const blog_details = (req, res) => {
  const id = req.params.id;
  // console.log(id);
  Blog.findById(id) //find a specfic blog by ID
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const blog_create_get = (req, res) => {
  res.render("add-blog", { title: "Create_new" });
};

export const blog_create_post = (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body); //this is the insitance of Blog ---in blog.js
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(err);
    });
};

export const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" }); //typical response to an API
    })
    .catch((err) => {
      console.log(err);
    });
};
// module.exports ={
//     blog_index,
//     blog_details,
//     blog_create_get,
//     blog_create_post,
//     blog_delete
// }
