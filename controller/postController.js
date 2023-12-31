const Post = require("../models/postsModel");
const User = require("../models/userModel");

//create a post
exports.createPost = async (req,res)=> {
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err)
    }
}


//update a post
exports.updatePost = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set : req.body});
            res.status(200).json("Post has been updated")
    
        }else{
            res.status(403).json("You can update only your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
}



//delete a post
exports.deletePost = async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post has been deleted successfully");
        }else{
            res.status(403).json("You can only delete your post");
        }
    }catch(err){
        res.status(500).json(err);
    }
}

//like and dislike a post
exports.likePost = async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push :{likes : req.body.userId}});
            res.status(200).json("The post has been liked");
        }else{
            await post.updateOne({$pull : {likes :req.body.userId}});
            res.status(200).json("The post has been disliked");
        }

    }catch(err){
      res.status(500).json(err);
    }
}


//get a post
exports.getPost = async (req,res) => {
    try{
    const post = await Post.findById(req.params.id);
    res.status(200).json(post)
    }catch(err){
        res.status(500).json(err);
    }
}


//get timeline post
exports.getAllPost = async (req,res) => {
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId:currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Post.find({userId:friendId});
            })
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err);
    }
}