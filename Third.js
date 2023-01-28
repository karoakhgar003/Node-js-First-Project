var http = require('http')
fs = require('fs');

http.createServer(function(req, res){
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => {
                const data = JSON.parse((Buffer.concat(chunks).toString()));
                fs.appendFile('data.txt', JSON.stringify(data), function (err) {
                   if (err) return console.log(err);
                   console.log('File saved');
                });
                res.end("Data Recived")
        })
        res.writeHead(200, {'Content-Type' : 'text/plain'})
        res.end('data recived')

}).listen(1339,'127.0.0.1')