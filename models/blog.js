const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema: schema is the thing that's going to define the structure of the document we will register in the collection

const blogSchema = new Schema({
    title: { type: String, required: true },
    snipet: { type: String, required: true },
    body: { type: String, required: true }
}, {timestamps: true})

//create a model based on the schema
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;