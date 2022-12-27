var http = require('http')
var anyBody = require("body/any")

http.createServer(function(req, res){
        anyBody(req, res, {}, (err,data)=>{
                console.log(data)
        })
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('data recived')

}).listen(1339,'127.0.0.1')