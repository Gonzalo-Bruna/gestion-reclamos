import express, { Request, Response } from 'express';
import complaintController from './complaint.controller';
import responseModule from './../../modules/response.module';

const router = express.Router();

router.get('/complaints-list', async (req: Request, res: Response) => {

    try {
        let complaints = await complaintController.getAllComplaints();
        responseModule.success(req, res, complaints);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.get('/:id', async (req: Request, res: Response) => {

    const id:string = req.params['id'];

    try {
        let complaint = await complaintController.getComplaintById(id);
        responseModule.success(req, res, complaint);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.post('/new', async (req: Request, res: Response) => {

    const complaint = req.body;

    try {
        
        let newComplaint = await complaintController.addComplaint(complaint);
        responseModule.success(req, res, newComplaint, 201);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

export default router;