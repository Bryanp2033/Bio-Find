const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    password: 'root',
    database: 'History'
});

connection.connect( function(error){
    if (error) throw err

    console.log('mySQL connected as id: ' + connection.threadId);
})

module.exports = connection;