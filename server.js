var http = require('http');
var path = require('path');
var fs = require('fs');
var port = process.env.PORT || 3001;
console.log(port);
http.createServer(function(req,res) {

  var filePath = '.'+req.url;

  if(filePath == './')
    filePath = './index.html';
  console.log(filePath);
  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
  }
  fs.exists(filePath, function(exists){
    if(exists) {
      fs.readFile(filePath, function(err,con) {
        if(err){
          res.writeHead(500);
          res.end();
        }else{
          res.writeHead(200, {'Content-Type':contentType});
          res.end(con, 'utf-8');
        }
      });
    }
  });

}).listen(port);

console.log('server running');
