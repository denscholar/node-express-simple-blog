//how to create a server using NODE.JS

const http = require('http');
const fs = require('fs');
const _ = require('lodash')

//creating the server
const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    //LODASH
    // const num = _.random(0, 20); //output a random number between (0, 20)
    // console.log(num);




    //in the call back, we have access to two different object: request and response object.
    //set header content type
    res.setHeader('Content-type', 'text/html');
    
    //ROUTING
    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; //this adds a status code to the page
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200; //this adds a status code to the page
            break;
        case '/about-us':
            res.statusCode = 301; //this adds a status code to the page
            res.setHeader('Location', '/about') //page redirect
            res.end();
            break;

        default:
            path += '404.html'
            res.statusCode = 404; //this adds a status code to the page
            break;
    }


    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('this is an error');
            res.end();
        } else {
            //adding status code
            res.write(data);
            res.end();
        }
    })

});

// listening to the server
server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})
