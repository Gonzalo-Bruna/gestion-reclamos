import express, { Request, Response } from 'express';
import userController from './user.controller';
import responseModule from './../../modules/response.module';

const router = express.Router();

router.get('/users-list', async (req: Request, res: Response) => {

    try {
        let users = await userController.getAllUsers();
        responseModule.success(req, res, users);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.get('/:id', async (req: Request, res: Response) => {

    const id:string = req.params['id'];

    try {
        let user = await userController.getUserById(id);
        responseModule.success(req, res, user);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.get('/:username', async (req: Request, res: Response) => {

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
        responseModule.success(req, res, newUser, 201);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

export default router;