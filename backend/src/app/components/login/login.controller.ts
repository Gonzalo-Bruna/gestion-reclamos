import loginRepository from "./login.repository";
import { Login } from '../../models/login.model';

function login(login: Login){
    return loginRepository.login(login);
}

export default { login };