const express = require('express');

const router = express.Router();
const blogController = require('../controllers/blogControllers')

//adds data to mongodb atlas
router.post('/add-blog',blogController.blog_create);
     
//retrieval of data
router.get('/blog-get',blogController.blog_get);
     
module.exports = router;