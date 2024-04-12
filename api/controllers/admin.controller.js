import User from "../models/user.model.js";

export const getUser = async(req,res)=>{
    try{
        const users = await User.find({})
        res.json(users)
    }catch(err){
        console.log(err);
    }
}

export const deleteUser = async(req,res)=>{
    try{
      const {id} =req.params
      console.log(id);
      await User.findByIdAndDelete(id)
      res.json({message:'user deleted succesfully'})
    }catch(err){
        console.log(err);
    }
}

export const createUser = async (req,res)=>{
    try {
        const {username,email,password} = req.body
        const newUser = new User({username,email,password})
        await newUser.save()
        res.json({messsage:'user created succcesfully',user:newUser})
    } catch (error) {
        console.log(err)
        res.status(500).json({message:"failed to create user"})
    }
}

export const updateUser = async(req,res)=>{
    try{
        console.log("here");
        console.log(req.body);
        const {id} = req.params
        console.log(id);
        const {username,email} = req.body
        const updatedUser = await User.findByIdAndUpdate(id,{username,email},{new:true})
        res.json({ message: 'User updated successfully', user: updatedUser });
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Failed to update user' });
    }
}

export const currentUser = async(req,res)=>{
    try{
        const {id} = req.params
        const user = await User.findById(id)
        res.json(user)
    }catch(err){
        console.log(err);
        res.status(500).json({ message: 'Failed to get current user' });
    }
}