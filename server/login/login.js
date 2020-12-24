
let conn = require("../config/db_connection");
let connection = conn.getConnection();
let create_token = require("../config/generate_token");
let server_token = require("../config/token");
let login  = require("express").Router().post("/",(req,res)=>{
    connection.query(`select * from login_details where uname='${req.body.uname}' and upwd='${req.body.upwd}'`,(err,records,fields)=>{
        if(err) throw err;
        else{
            if(records.length>0){
                let token = create_token({
                    "uname":req.body.uname,
                    "upwd":req.body.upwd
                },"hr@gauravkale33.in");
                server_token.token = token;
                res.send({"login":"success","token":token});
            }else{
                res.send({"login":"fail"});
            }
        }
    })
});
module.exports = login;
