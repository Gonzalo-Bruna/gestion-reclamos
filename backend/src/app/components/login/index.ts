import express, { Express } from 'express';
import loginRouter from './login.network';

const login: Express = express();

login.use('/access', loginRouter);

export default login;