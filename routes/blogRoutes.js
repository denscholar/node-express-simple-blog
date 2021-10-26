const express = require('express');
const router = express.Router();

const blogController = require('../controller/blogController')

//blog route
router.get('/blogs', blogController.blogIndex);

//the create/post request
router.post('/blogs', blogController.blogPost);

//create route
router.get('/blogs/create', blogController.blogCreate);

//detail route
router.get('/blogs/:id', blogController.blogDetail);

//Delete
router.delete('/blogs/:id', blogController.blogDelete)

module.exports = router;