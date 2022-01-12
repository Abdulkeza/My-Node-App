
var router = require('express').Router();
const blogController =require('../controllers/BlogController');


router.get("/", blogController.blog_index) 
    
  
  //!!!creating post request to post to a blogs view/ This is new request section
  
  router.post("/", blogController.blog_create_post) 

  router.get("/add-blog", blogController.blog_create_get  )
  
  //!!! Handling Get request for Single Blog to be displayed alone depending on it's ID
  
  router.get("/:id", blogController.blog_details ) 
   
 
   
  //!! Handling DELETE request
  
  router.delete("/:id", blogController.blog_delete); 
  

  //!!About page
  
  router.get("/blogs/about", (req, res) => {
    res.render("about", { title: "About" });
  });
  


  module.exports = router;