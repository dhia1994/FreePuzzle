const Mysqli = require('mysqli');
const dbConfig = require("../config/db.config.js");
 /*
// Pass in json
let conn = new Mysqli({
    host: 'us-cdbr-east-04.cleardb.com', //  IP/domain name  
    post: 3306, // Port, default 3306  
    user: 'bad3b98f4973cc', // Username  
    passwd: 'e042c3ac', // password  
    db: 'heroku_3df33406a96dc2a' //You  can specify the database or not [optional]  
});

let db = conn.emit(false, '')
*/

var connection = Mysqli.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.passwd,
  database: dbConfig.db
});

module.exports = connection;
/*
module.exports = connection;
module.exports = {
    database : db
}
*/