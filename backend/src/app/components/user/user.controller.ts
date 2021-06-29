import userRepository from "./user.repository";
import { User } from '../../models/user.model';

function getAllUsers(){
    return userRepository.getAllUsers();
}

function getUserById(id: string){
    return userRepository.getUserById(id);
}

function getUserByUsername(username: string){
    return userRepository.getUserByUsername(username);
}

function addUser(user: User){
    return userRepository.addUser(user);
}

export default { getAllUsers, getUserById, addUser, getUserByUsername };