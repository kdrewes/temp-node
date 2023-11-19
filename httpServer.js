// Loading the HTTP module
const http = require('http')


/*
Server creation with a callback function. 
Note that there are two parameters that are passed to the function: req and res.

req: will contain info on the incoming request
res: will be used to define the outgoing response
*/
const server = http.createServer((req,res) => {

    // res.end() tells the server that the response is complete and can now be sent
    res.end('hola mundo desde el servidor')

})

/*
Starting the server. The server will wait and read the requests that arrive on port 5000.
This is an endless loop. Each time a request will be sent to our server at port 5000 (ex: localhost:5000), 
the server will execute the callback (see previous code block) and therefore in this case send the response 
'Hello World from the server'
*/

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})


/*
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('<h1>Home page</h1>')
    } else if (req.url === '/about') {
        res.end('<h1>About page</h1>')
    } else {
        res.end('page not found')
    }    
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
*/