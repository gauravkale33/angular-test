let prop = require("./db_properties");
let mysql = require("mysql");

let conn = {
    getConnection : ()=>{
        return mysql.createConnection(prop);
    }
};
module.exports = conn;
