const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({    
    id: String,
    title: String,
    description: String,
});

module.exports = mongoose.model('Blog', blogSchema);