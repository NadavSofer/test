const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('welcome to homepage!!!!')
    } else if (req.url == '/about') {
        res.end('Hello World from the about page')
    } else if (req.url == '/shop') {
        res.end('<p id="thing">hello I`m a p tag </p>')
    } else {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        res.end(JSON.stringify({ message: "Welcome New User"}))
    } 
    
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})