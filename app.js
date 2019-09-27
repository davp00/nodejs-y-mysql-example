const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'oc'
});

db.connect(function(err) {
    if (err) throw err;
    db.query("SELECT * FROM orders", ( err, result, fields ) => 
    {
        if(err) throw err;
        console.log(fields);
    });
    console.log("Connected!");
});