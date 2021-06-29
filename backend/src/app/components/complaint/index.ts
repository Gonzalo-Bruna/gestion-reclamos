import express, { Express } from 'express';
import complaintRouter from './complaint.network';

const complaint: Express = express();

complaint.use('/complaints', complaintRouter);

export default complaint;