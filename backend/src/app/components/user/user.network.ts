import express, { Request, Response } from 'express';
import userController from './user.controller';
import responseModule from './../../modules/response.module';
import jwt, { verifyToken } from '../../token/token';
const router = express.Router();

router.get('/users-list', verifyToken, async (req: Request, res: Response) => {

    try {
        let users = await userController.getAllUsers();
        responseModule.success(req, res, users);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.get('/id/:id', verifyToken, async (req: Request, res: Response) => {

    const id:string = req.params['id'];

    try {
        let user = await userController.getUserById(id);
        responseModule.success(req, res, user);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.get('/username/:username', async (req: Request, res: Response) => {

    const username:string = req.params['username'];

    try {
        let user = await userController.getUserByUsername(username);
        responseModule.success(req, res, user);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.post('/new', async (req: Request, res: Response) => {

    const user = req.body;

    try {
        let newUser = await userController.addUser(user);
        let payload = { subject: newUser._id }
        let token = jwt.sign(payload, "secretKey");
        responseModule.success(req, res, {token}, 201);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

export default router;