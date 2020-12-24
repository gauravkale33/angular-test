let server_token = require("../config/token");
let auth = require("../config/auth");
let logout = require("express").Router().get("/",[auth],(req,res)=>{
    server_token.token = "";
    res.send({"logout":"success"});
});
module.exports = logout;