const posts = require('../models/posts')
const blog_create = async (req,res)=>{
    
    const postNo = await posts.countDocuments()+1
    const newPost = new posts({
        title: req.body.title,
        snippet: req.body.snippet,
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

    // const newPost = new posts({
    //     title: res.body.title,
    //     snippet: res.body.snippet,
    //     no: postNo
    // });
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
    