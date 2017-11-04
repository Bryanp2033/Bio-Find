// Import MySQL connection.
const connection = require("../config/connection")

// Helper function for SQL syntax.???
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
}

var orm ={
    all: function(table,cb){
        var queryString = "SELECT * FROM" + table + ";";
        connection.query(queryString, function(err, result){
            cb(result);
        });
    },

    allBy: function(table, cond, val, cb){
        var condition = cond;
        var queryString = "SELECT * FROM " + table + " WHERE " + condition + " = ? ;";

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, val, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        var columns = cols.toString();
        var values = printQuestionMarks(vals.length);
        var queryString = "INSERT INTO " + table + "(" + columns + ")" 
            + " VALUES ( " + values + " ) ;";
        
        console.log("ORM Creating new entry", queryString);
        console.log("ORM Creating Values", vals);

        connection.query(queryString, vals, function (err, results) {
            cb(results);
        });
    },
    allBy2: function (table, cond, cond2, val, cb) {
        var condition = cond;
        var condition2 = cond2;        
        var queryString = "SELECT * FROM " + table + " WHERE " + condition + " = ? AND " + condition2 + " = ?;";

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, val, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
}

module.exports = orm;