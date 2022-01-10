// import {Router} from 'express';
// import getAllBlogs from '../controllers/BlogController';

// const BlogsRouter = Router();


// BlogsRouter.get('/', getAllBlogs );

// export default BlogsRouter;

// const express = require('express');
// var router = express.router();
var router = require('express').Router();
const blogController =require('../controllers/BlogController');




router.get("/blogs", blogController.blog_index) 
    //carried to => blog_index
    

  
  //!!!creating post request to post to a blogs view/ This is new request section
  
  router.post("/", blogController.blog_create_post) 

  router.get("/add-blog", blogController.blog_create_get  )
  
  //!!! Handling Get request for Single Blog to be displayed alone depending on it's ID
  
  router.get("/blogs/:id", blogController.blog_details ) 
   
 
  
  //!! Handling DELETE request
  
  router.delete("/blogs/:id", blogController.blog_delete); 
  
  
  //!!About page
  
  router.get("/about", (req, res) => {
    res.render("about", { title: "About" });
  });
  


  module.exports = router;