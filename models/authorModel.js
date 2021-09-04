const mongoose = require('mongoose')
const { Schema } = mongoose

const authorSchema = new Schema ({
    id: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    about: {
        type: String
    },
    password: {
        type: String
    }
    //Add Profile Image
})


const Author = new mongoose.model('Author', authorSchema)

module.exports = Blog
