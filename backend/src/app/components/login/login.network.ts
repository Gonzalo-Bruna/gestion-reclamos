import express, { Request, Response } from 'express';
import responseModule from './../../modules/response.module';
import userController from '../user/user.controller';
import jwt from '../../token/token';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {

    const userData = req.body;

    try {
        
        let user = await userController.getUserByUsername(userData.username);

        if(user.password == userData.password){
            let payload = { subject: user._id}
            let token = jwt.sign(payload, 'secretKey');
            responseModule.success(req, res, {token}, 201);
        }
        else{
            responseModule.error(req, res, "password not valid", 400);
        }
        
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

export default router;