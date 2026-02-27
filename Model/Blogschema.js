const mongoose = require("mongoose")

const blogschema = mongoose.Schema({
   image: String,
   title: String,
   description: String,
   category: {
      type: String,
      enum: ["Technology", "Education", "Health", "Lifestyle", "Travel", "Food"],
      required: true
   },
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
   }
})
const Blog = mongoose.model("Blog", blogschema);
module.exports = Blog;