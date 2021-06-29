import express, { Express } from 'express';
import userRouter from './user.network';

const user: Express = express();

user.use('/users', userRouter);

export default user;