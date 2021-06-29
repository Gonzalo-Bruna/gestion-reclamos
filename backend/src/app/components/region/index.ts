import express, { Express } from 'express';
import regionRouter from './region.network';

const region: Express = express();

region.use('/regions', regionRouter);

export default region;