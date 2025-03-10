
const User = require("../Model/UserModel");

const getAllUsers = async (req , res , next) => {

    let Users;

    try{
        users = await User.find();
    }catch (err) {
        console.log(err);
    }
    //not found
    if(!users){
        return res.status(404).json({message:"User not found"});
    }
    //Display all users
    return res.status(200).json({ users });
};

//data insert
const addUsers = async (req , res , next) => {

    const {name,gmail,age,address} = req.body;

    let users;

    try { 
        users = new User({name,gmail,age,address});
        await users.save();
    }catch (err) {
        console.log(err);
    }
    //not insert users
    if (!users){
        return res.status(404).json({message:"unable to add employees"});
    }
    return res.status(200).json({ users });



};

//get by ID
const getById = async (req , res , next) => {

    const id = req.params.id;

    let user;

    try{
        user = await User.findById(id);
    }catch (err){
        console.log(err);

    }
    //not available
    if (!user){
        return res.status(404).json({message:"Employee not found"});
    }
    return res.status(200).json({ user });



};

//update user details
const updateUser = async (req , res , next) => {
    const id = req.params.id;
    const {name,gmail,age,address} = req.body;

    let users;

    try{
        users = await User.findByIdAndUpdate(id,
            { name: name,gmail:gmail,age:age,address:address});
            users = await users.save();

    }catch(err){
        console.log(err);
    }
    //not available
    if (!users){
        return res.status(404).json({message:"Unable to update employee details"});
    }
    return res.status(200).json({ users});

};

//delete user details
const deleteUser = async ( req , res , next) => {
    const id = req.params.id;

    let user;

    try{
        user = await User.findByIdAndDelete(id)
    }catch(err){
        console.log(err);
    }
     //not available
     if (!user){
        return res.status(404).json({message:"Unable to delete employee details"});
    }
    return res.status(200).json({ user});

};

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
