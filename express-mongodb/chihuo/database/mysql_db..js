/**
 * Created by Administrator on 2016/11/17.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password : '123456',
    database : 'test',
    charset : 'UTF8_GENERAL_CI',
    debug : false
});

connection.connect();

module.exports = connection;