var http = require('http')

const data = {name: 'karo', age: 18, email: 'karoakhgar82@hotmail.com'}
http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'application\json'})
        res.end(JSON.stringify(data))
        

}).listen(1337,'127.0.0.1')

const options = {
    protocol: "http:",
    hostname: "127.0.0.1",
    port: "1338",
    path: "/",
    method: "POST", // <-- POST the data
  };

var post_req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('Response: ' + chunk);
    });
})
post_req.write(JSON.stringify(data)) 
post_req.end()