var http = require('http')

http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('hello world2')

}).listen(1338,'127.0.0.1')