let jwt = require("jwt-simple");

let create_token = (data,password)=>{
    return jwt.encode(data,password);
};

module.exports = create_token;


