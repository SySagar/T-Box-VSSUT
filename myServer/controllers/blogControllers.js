const posts = require('../models/blogs')
const blog_create = async (req,res)=>{
    
    const postNo = await posts.countDocuments()+1
    const newPost = new posts({
        title: req.body.title,
        content: req.body.content,
        no: postNo
    });
    
    console.log(newPost.body);

    await newPost.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
        res.render('./views/404.html');
    });
    };

 
const blog_get = async (req,res)=>{

    let x = Math.random();   
    const count =  await posts.countDocuments();

    

    posts.findOne({no : Math.ceil(x*count)})
    .then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err);
    });
};

    module.exports = {blog_create , blog_get}
    