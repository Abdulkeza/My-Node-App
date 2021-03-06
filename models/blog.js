//!!creating models and schema for a blog (Schema define the structure of our document(blog))
//while models provide an interface by which to communicate with DB collections based on schema

import mongoose from "mongoose";
const schema = mongoose.Schema;

const blogSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//!! creating Model

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
