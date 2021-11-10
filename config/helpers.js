/*
const Mysqli = require('mysqli');
 
// Pass in json
let conn = new Mysqli({
    host: 'us-cdbr-east-04.cleardb.com', //  IP/domain name  
    post: 3306, // Port, default 3306  
    user: 'bad3b98f4973cc', // Username  
    passwd: 'e042c3ac', // password  
    db: 'heroku_3df33406a96dc2a' //You  can specify the database or not [optional]  
});
*/

// create new database instance
let db = new Prohairesis("mysql://bad3b98f4973cc:e042c3ac@us-cdbr-east-04.cleardb.com/heroku_3df33406a96dc2a?reconnect=true");
let db = conn.emit(false, '')
module.exports = {
    database : db
}