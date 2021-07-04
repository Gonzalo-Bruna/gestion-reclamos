import { User } from "../../models/user.model";
import userSchema from './user.schema';

function getAllUsers(){
    return userSchema.find();
}

function getUserById(id:string){
    return userSchema.findOne({_id: id});
}

function getUserByUsername(_username: string){
    return userSchema.findOne({username: _username});
}

function addUser(user: User){
    return userSchema.create(user);
}

export default { getAllUsers, getUserById, addUser, getUserByUsername };