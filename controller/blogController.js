const Blog = require('../models/blog');

const blogIndex = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'All blogs', blogs: result })
        }).catch((err) => {
            console.log(err);
        })
}

const blogDetail = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then((result) => {
        res.render('blogs/details', { blog: result, title: 'Blog Details' });
    }).catch((err) => {
        console.log(err);
    })
}

const blogCreate = (req, res) => {
    res.render('blogs/create', { title: 'Create a new blog' });
}
const blogPost = (req, res) => {
    // then create a new instance of the blog database
    const blog = new Blog(req.body);
    blog.save().then((result) => {
        //redirect the response back to the home page
        res.redirect('/blogs');
    }).catch((err) => {
        console.log(err);
    })
}

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/blogs' })
        })
        .catch((err) => {
            console.log(err);
        })

}

module.exports = {
    blogIndex,
    blogDetail,
    blogCreate,
    blogPost,
    blogDelete
}