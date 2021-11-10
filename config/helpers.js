const Mysqli = require('mysqli');
 
let conn;
process.env.CLEARDB_DATABASE_URL = 'mysql://bad3b98f4973cc:e042c3ac@us-cdbr-east-04.cleardb.com/heroku_3df33406a96dc2a?reconnect=true';
if (process.env.CLEARDB_DATABASE_URL) {
    conn = new Mysqli(process.env.CLEARDB_DATABASE_URL)
}
else {
    // Pass in json
    conn = new Mysqli({
        host: 'localhost', //  IP/domain name  
        post: 3306, // Port, default 3306  
        user: 'root', // Username  
        passwd: '', // password  
        db: 'FreePuzzle' //You  can specify the database or not [optional]  
    });
}
let db = conn.emit(false, '')

module.exports = {
    database : db
}