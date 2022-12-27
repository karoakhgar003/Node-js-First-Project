var http = require('http');

var anyBody = require("body/any")

http.createServer(function(req, res){
    let data;
    anyBody(req, res, {}, (err,data)=>{
        data = data.data
        let result = " My name is " + data.name + ".\n I'm " + data.age + " years old.\n My email is: " + data.email
        res.end(result)
    })
    res.writeHead(200, {'Content-Type' : 'text/plain'});

}).listen(1338,'127.0.0.1');