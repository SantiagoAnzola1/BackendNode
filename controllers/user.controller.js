const User = require('../models/user.models')
const getUsers = async (req, res) => {
    try{
        const user= await User.find()
        res.status(200).json(user)
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const getUsersById = async (req, res) => {
    try{
        const {id} = req.params
        const user= await User.findById(id)
        res.status(200).json(user)   
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const createUser = async (req, res) => {
    try{
        const user= await User.create(req.body)
        res.status(200).json(user)
        
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

module.exports = {getUsers, getUsersById, createUser}