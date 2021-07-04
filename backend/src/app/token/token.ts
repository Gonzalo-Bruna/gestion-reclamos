import responseModule from "../modules/response.module";

const jwt = require('jsonwebtoken');

function verifyToken(req:any, res:any, next:any): void {

    if(!req.headers.authorization){
        responseModule.error(req, res, "Unauthorized request", 401);
    }
    else {
        let token = req.headers.authorization.split(' ')[1];
        if(token === 'null'){
            responseModule.error(req, res, "Unauthorized request", 401);
        }
        else{
            let payload = jwt.verify(token, "secretKey");

            if(!payload){
                responseModule.error(req, res, "Unauthorized request", 401);
            }
            else{
                req.userId = payload.subject;
                next();
            }
        }
    }
}

export default jwt;
export {verifyToken};