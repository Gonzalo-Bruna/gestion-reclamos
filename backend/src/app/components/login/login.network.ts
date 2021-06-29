import express, { Request, Response } from 'express';
import responseModule from './../../modules/response.module';
import userController from '../user/user.controller';

const router = express.Router();

router.post('/login', async (req: Request, res: Response) => {

    const userData = req.body;
    console.log(userData);

    try {
        
        let user = await userController.getUserByUsername(userData.username);

        if(user.password == userData.password){
            responseModule.success(req, res, user, 201);
        }
        
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

export default router;