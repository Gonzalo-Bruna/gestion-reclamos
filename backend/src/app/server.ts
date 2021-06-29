import express, { Express } from 'express';
import mongooseModule from './modules/mongoose.module';
import cors from 'cors';

import user from './components/user/index';
import complaint from './components/complaint/index';
import region from './components/region/index';
import login from './components/login/index';

async function main(){

    /* Server connection */
    const server: Express = express();
    const port:number = 3000;

    server.use(express.json());
    server.use(cors());
    server.use('/api', user, complaint, region, login);

    try{
        mongooseModule.connect();
        console.log("database connection successful");

        server.listen(port, () => {
            console.log("Server listening on : http://localhost:3000/api");
        });
    }
    catch (error){
        console.log("database connection failed");
    }
    
}

export default { main };