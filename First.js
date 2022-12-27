var http = require('http')
var axios = require('axios')

const data = {name: 'karo', age: 18, email: 'karoakhgar82@hotmail.com'}
http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type' : 'application\json'})
        res.end(JSON.stringify(data))
        

}).listen(1337,'127.0.0.1')

const api = axios.create({baseURL: 'http://127.0.0.1:1338'})
api.post('/', {
    data: data
})
.then(res => {
     console.log(res.data)
})
.catch(error => {
     console.log(error)
})