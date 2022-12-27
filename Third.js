var http = require('http')
var anyBody = require("body/any")
fs = require('fs');

http.createServer(function(req, res){
        anyBody(req, res, {}, (err,data)=>{
                fs.appendFile('data.txt', JSON.stringify(data), function (err) {
                if (err) return console.log(err);
                        console.log('File saved');
                });
        })
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('data recived')

}).listen(1339,'127.0.0.1')