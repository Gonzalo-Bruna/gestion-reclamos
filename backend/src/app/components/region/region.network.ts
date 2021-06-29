import express, { Request, Response } from 'express';
import regionController from './region.controller';
import responseModule from './../../modules/response.module';

const router = express.Router();

router.get('/regions-list', async (req: Request, res: Response) => {

    try {
        let regions = await regionController.getAllRegions();
        responseModule.success(req, res, regions);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

router.get('/:name', async (req: Request, res: Response) => {

    const name:string = req.params['name'];

    try {
        let region = await regionController.getRegionById(name);
        responseModule.success(req, res, region);
    } catch (error) {
        responseModule.error(req, res);
    }
    
});

export default router;