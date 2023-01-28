var http = require('http');


let sendData = function(url,port,path,data) {
        const options = {
            protocol: "http:",
            hostname: url,
            port: port,
            path: path,
            method: "POST",
          };
        
        var post_req = http.request(options, function(res) {
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                console.log('Response: ' + chunk);
            });
        })
        post_req.write(JSON.stringify(data)) 
        post_req.end()
}

http.createServer(function(req, res){
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => {
        const data = JSON.parse((Buffer.concat(chunks).toString()));
        let result = " My name is " + data.name + ".\n I'm " + data.age + " years old.\n My email is: " + data.email
        sendData('127.0.0.1','1339','/',data)
        res.end(result)
    })
    res.writeHead(200, {'Content-Type' : 'text/plain'});

}).listen(1338,'127.0.0.1');