import {Router} from 'express';
import {blog_index,blog_create_post, blog_create_get,blog_details,blog_delete} from '../controllers/BlogController.js'
// const blogController =require('../controllers/BlogController');

const  router = Router();
router.get("/", blog_index) 
    
  
  //!!!creating post request to post to a blogs view/ This is new request section
  
  router.post("/", blog_create_post) 
  router.get("/add-blog", blog_create_get  )
  
  //!!! Handling Get request for Single Blog to be displayed alone depending on it's ID
  
  router.get("/:id", blog_details ) 
   
 
   
  //!! Handling DELETE request
  
  router.delete("/:id", blog_delete); 
  

  //!!About page
  
  router.get("/blogs/about", (req, res) => {
    res.render("about", { title: "About" });
  });
  

export default router;
  //???????????????????????