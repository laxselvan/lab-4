const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer(function (req, res) {
    if (req.url == "/index.html") {
        fs.readFile('index.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html'});
            res.write(data, 'utf-8');
            return res.end();
        });
    }
    else if (req.url == "/bmi.html.htm") {
        fs.readFile('bmi.html.htm', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
   
    else if (req.url == "/ebbill.htm") {
        fs.readFile('ebbill.htm', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    else if (req.url == "/cgpacalculator.htm") {
        fs.readFile('cgpacalculator.htm', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
    else if (req.url.match('\.css$')) {
      var imagePath = path.join(__dirname, req.url);
      var fileStream = fs.createReadStream(imagePath);
      res.writeHead(200, { "Content-Type": "text/css" });
      fileStream.pipe(res);
  }
   
    
  
}).listen(8090);