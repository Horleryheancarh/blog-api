const mongoose = require('mongoose')
const { Schema } = mongoose

const blogSchema = new Schema ({
    id: {
        type: String
    },
    title: {
        type: String
    },
    author: {
        type: String
    },
    body: {
        type: String
    },
    //Add Blog Images
})


const Blog = new mongoose.model('Blog', blogSchema)

module.exports = Blog
