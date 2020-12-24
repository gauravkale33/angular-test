let conn = require("../config/db_connection");
let connection = conn.getConnection();
let auth = require("../config/auth");
let home = require("express").Router().get("/",[auth],(req,res)=>{
    connection.query(`select * from home`,(err,records,fields)=>{
        if(err) throw err;
        else{
            res.send(records);
        }
    });
});
module.exports = home;