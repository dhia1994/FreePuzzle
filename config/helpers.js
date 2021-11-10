const Mysqli = require('mysqli');
 
let conn;
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