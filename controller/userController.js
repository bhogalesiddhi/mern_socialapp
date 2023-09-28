const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.getAllUsers = (req,res) => {
    res.send("Hey this is the user route");
}


//update user
exports.updateUser = async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password= await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account updated successfully");
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    else{
        return res.status(403).json("You can update only your account!!")
    }

}

//delete user
exports.deleteUser = async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        
            try{
                const user = await User.findByIdAndDelete(req.params.id);
                res.status(200).json("Account deleted successfully");
            }
            catch(err){
                res.status(500).json(err);
            }
    
        
    }
    else{
        return res.status(403).json("You can delete only your account!!")
    }

}

exports.getUser = async (req,res) => {
    try{
    const user = await User.findById(req.params.id);
    const {password ,...other} = user._doc;

    res.status(500).json(other);
    // res.status(500).json(user);
    } catch(err){
        res.status(500).json(err)
    }

}

exports.follow = async (req,res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push : {followers : req.body.userId}});
                await currentUser.updateOne({$push : { followings:req.params.id}});
                res.status(200).json("User has been followed successfully")
            }else{
                res.status(403).json("You already follow the user")
            }
        }
        catch(err) {
            res.status(500).json(err);
        }

        
    }else{
        res.status(403).json("You cant follow yourself");
    }
}


//unfollow a user
exports.unfollow = async (req,res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);

            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull : {followers : req.body.userId}});
                await currentUser.updateOne({$pull : { followings:req.params.id}});
                res.status(200).json("User has been unfollowed successfully")
            }else{
                res.status(403).json("You already dont follow the user")
            }
        }
        catch(err) {
            res.status(500).json(err);
        }

        
    }else{
        res.status(403).json("You cant unfollow yourself");
    }
}