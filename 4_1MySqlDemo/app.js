/**
 *
 * Created by longlingxiu on 15/3/15.
 */

var  http = require('http')
var  mysql  = require('mysql')

var connection =  mysql.createConnection({
    user : "root",
    password : "pan617952766",
    database : "nodejs"  //数据库的名称
})

var server = http.createServer(function (request, response) {

    // server端获取去到请求之后，返回数据库中所有的内容,其中users是一张表
    connection.query('select * from users;', function (error, rows, fileds) {
        response.writeHead(200, {"Content-Type" : "text/plain"})

        var content = JSON.stringify(rows)
        response.end('content1: '+content)
        response.end( JSON.stringify( rows ))
        // response.end('aaaaaaaa')
    })

    console.log("received a data!....")

})

server.listen(8081)

console.log("app started!....")


// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello World');
// })
//
// var server = app.listen(8081, function () {
//
//     var host = server.address().address
//     var port = server.address().port
//
//     console.log("应用实例，访问地址为 http://%s:%s", host, port)
//
// })