const express = require("express");
const Blog = require("../models/blogModel");
const router = express.Router();
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const { upload } = require("../utils/fileUpload");
const { protect } = require("../middleware/authMiddleware");

// @desc Create Blogs
router.post("/create", upload.single("image"), async (req, res) => {
  const blogs = new Blog({
    title: req.body.title,
    description: req.body.description,
    content: req.body.content,
    image: req.file.originalname,
  });
  try {
    const savedBlogs = await blogs.save();
    res.json(savedBlogs);
    console.log(savedBlogs);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// @desc Fetch All products
router.route("/").get(getBlogs);
router.route("/:id").get(getBlogById).patch(updateBlog).delete(deleteBlog);

module.exports = router;
