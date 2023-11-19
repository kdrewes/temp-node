const http = require('http');

// Create server
const server = http.createServer((req,res) =>{

    // if the request url is equal to the homepage
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }

    if(req.url === '/about'){
        res.end('Here is our short history')
    }

    res.end(`
        <h1>Opps!</h1>
        <p>Can't find page</p>
        <a href="/">Back to homepage</a>
        `
    )

//res.write('Welcome to our homepage');
//res.end();
})

// Determine port # server is listening to
server.listen(4000);