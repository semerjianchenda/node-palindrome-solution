const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function (req, res) {
    const page = url.parse(req.url).pathname;
    const params = querystring.parse(url.parse(req.url).query);
    console.log(page);
    if (page == '/') {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }else if (page == '/otherpage') {
        fs.readFile('otherpage.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
      else if (page == '/otherotherpage') {
        fs.readFile('otherotherpage.html', function(err, data) {
          res.writeHead(200, {'Content-Type': 'text/html'});
          res.write(data);
          res.end();
        });
      }
    else if (page == '/api') {
        if('donut' in params){
        //   let userInput = params['donut']
          let inputRev = params['donut'].toLowerCase().split('').reverse().join(''); 

            res.writeHead(200, {'Content-Type': 'application/json'});
            if(params['donut'] == inputRev){
                yes = "No match"
                // document.querySelector('h2').innertext = "Nice job"
            }else{
                yes = "Nice job"
                // document.querySelector('h2').innertext = "No match"
            }
            const objToJson = {
              word: `${yes}`
            }
            res.end(JSON.stringify(objToJson));
          
        }
      }
    else if (page == '/main.css') {
        fs.readFile('main.css', function (err, data) {
            res.write(data);
            res.end();
        });
    } else if (page == '/main.js') {
        fs.readFile('main.js', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/javascript' });
            res.write(data);
            res.end();
        });
    } else {
        figlet('404!!', function (err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            res.write(data);
            res.end();
        });
    }
});

server.listen(8000);