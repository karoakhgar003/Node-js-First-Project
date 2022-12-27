var http = require('http');
var axios = require('axios')
var anyBody = require("body/any")


let sendData = function(url,path,data) {
        const api = axios.create({baseURL: url})
        api.post(path, {
        data: data
        })
        .then(res => {
        console.log(res.data)
        })
        .catch(error => {
        console.log(error)
        })
}

http.createServer(function(req, res){
    let data;
    anyBody(req, res, {}, (err,data)=>{
        data = data.data
        let result = " My name is " + data.name + ".\n I'm " + data.age + " years old.\n My email is: " + data.email
        sendData('http://127.0.0.1:1339','/',data)
        res.end(result)
    })
    res.writeHead(200, {'Content-Type' : 'text/plain'});

}).listen(1338,'127.0.0.1');