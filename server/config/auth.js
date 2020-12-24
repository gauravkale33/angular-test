let server_token = require("./token");
let auth = (req,res,next)=>{
    let all_headers = req.headers;
    let client_token = all_headers.token;
    if(client_token == server_token.token){
        next();
    }else{
        res.send({"message":"unauthorized user"});
    }
};
module.exports = auth;
