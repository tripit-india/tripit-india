import express from 'express';
import Blog from '../models/blog.js';

const router = express.Router();

router.post('/blogs', async (req, res) => {
  try {
    const newBlog = new Blog({
      mainTitle: req.body.mainTitle,
      mainImage: req.body.mainImage,
      mainDescription: req.body.mainDescription,
      subtitles: req.body.subtitles, // Add the subtitles to the blog
    });

    const savedBlog = await newBlog.save();
    res.status(200).json({
      success: true,
      message: 'Successfully created a new blog entry',
      data: savedBlog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create a new blog entry',
      error: err.message,
    });
  }
});


// Update a blog entry
router.put('/blogs/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: 'Successfully updated the blog entry',
      data: updatedBlog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update the blog entry',
      error: err.message,
    });
  }
});

// Delete a blog entry
router.delete('/blogs/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Successfully deleted the blog entry',
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to delete the blog entry',
      error: err.message,
    });
  }
});

// Get all blogs
router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved all blogs',
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get all blogs',
      error: err.message,
    });
  }
});

// Get a single blog by ID
router.get('/blogs/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    res.status(200).json({
      success: true,
      message: 'Successfully retrieved the blog',
      data: blog,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to get the blog',
      error: err.message,
    });
  }
});

export default router;
