const Blog = require("../models/blogModel");
const asyncHandler = require("express-async-handler");

// @desc Fetch All blogs
// @route GET /api/blogs
// @acess Public
exports.getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({});
  res.send(blogs);
});

// @desc Fetch Blog By id
// @route GET /api/blogs/:id
// @acess Public
exports.getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.json({ message: "Blog not found" });
  }
});
// @desc Update Blog
// @route PATCH /api/blogs/:id
// @acess Public
exports.updateBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(blog);
  } catch (error) {
    res.json({ error: error.message });
  }
});
// @desc DElete Blog
// @route Delete /api/blogs/:id
// @acess Public
exports.deleteBlog = asyncHandler(async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) {
      await blog.remove();
      res.json({message:'deleted Successfully'});
    }
  } catch (err) {
    res.json({ message: err.message });
  }
});
