import { Login } from "../../models/login.model";
import loginSchema from './login.schema';

function login(login: Login){
    return loginSchema.create(login);
}

export default { login };