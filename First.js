var http = require('http')

const data = {name: 'karo', age: 18, email: 'karoakhgar82@hotmail.com'}

http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'application\json'})
        res.end(JSON.stringify(data))

}).listen(1337,'127.0.0.1')