import { Router } from "express";
import {
  blog_index,
  blog_create_get,
  blog_create_post,
  blog_details,
  blog_delete,
} from "../controllers/BlogController.js";
// const blogController =require('../controllers/BlogController');

const router = Router();

router.get("/", blog_index);

//!!!creating post request to post to a blogs view/ This is new request section

//send back the actual form to the user
router.get("/add-blog", blog_create_get);

//Adding created blog to a db
router.post("/", blog_create_post);


//!!! Handling Get request for Single Blog to be displayed alone depending on it's ID

router.get("/:id", blog_details);

//!! Handling DELETE request

router.delete("/:id", blog_delete);

export default router;
//???????????????????????
