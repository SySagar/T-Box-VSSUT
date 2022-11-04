const mongoose= require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String,required : [true, 'name is required']},
    snippet:{type: String,required : [true, 'snippet is required']},
    no: Number
    });

//it pluralises Blog to Blogs and finds it
const posts = mongoose.model('posts',postSchema);
module.exports = posts;