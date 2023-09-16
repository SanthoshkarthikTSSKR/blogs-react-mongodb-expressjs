const express = require('express');
const router = express.Router();
const Blog = require('./blog');

// Create a blog post
router.post('/save', (req, res) => {
  const { title, description } = req.body;
  const newBlog = new Blog({ title, description });
  newBlog.save()
    .then((blog) => {
      res.json({message: "Saved Successfully"});
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error creating blog post' });
    });
});

// Read all blog posts
router.get('/get', (req, res) => {
  Blog.find()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving blog posts' });
    });
});

// Read a blog post
router.get('/getById/:_id', (req, res) => {
  Blog.findById(req.params._id)
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error retrieving blog posts' });
    });
});

// Update a blog post
router.post('/update/:id', (req, res) => {
  const { title, description } = req.body;
  if (title || description) {
    Blog.findByIdAndUpdate({_id: req.params.id}, {title, description}, { new: true })
    .then((blog) => {
      res.json({message: "Updated Successfully"});
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error updating blog post' });
    });
  }
});

// Delete a blog post
router.delete('/delete/:id', (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then((blog) => {
      res.json({message: "Deleted Successfully"});
    })
    .catch((error) => {
      res.status(500).json({ error: 'Error deleting blog post' });
    });
});

module.exports = router;