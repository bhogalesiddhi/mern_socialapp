
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

exports.auth = async (req,res) => {
    try{
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password,salt);
        
        //create user
        const newUser = await new User({
            username : req.body.username,
            email : req.body.email,
            password: hashedPassword
        });


        //save user and respond
        const user = await newUser.save();
        res.status(200).json(user)
    }catch(error){
        console.log(error);
    }   
}


exports.login= async(req,res) => {
    try{
    const user = await  User.findOne({ email : req.body.email});
    if(!user){
        res.status(404).json("user not found")
    }

    const validPassword = await bcrypt.compare(req.body.password,user.password);
    
    if(!validPassword){
        res.status(400).json("password in valid");
    }

    res.status(200).json(user);

    } catch(error){
        res.status(500).json(err);
    }

}