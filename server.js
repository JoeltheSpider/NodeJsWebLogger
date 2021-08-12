var http = require('http');
var fs = require('fs');
const { resolveSoa } = require('dns');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.method == "POST"){
    var body = "";
    req.on('data', function (data) {
      body += data;
      fs.appendFile('E://Files//college//9sem//WA//logs.log', body+"\n", err => {
        if (err)
          console.log("Err");
      });
    });
    res.write("Appending contents to file");
    res.end();
  }
  else{
    //res.end("Haha");
    var page = fs.createReadStream('page.html','utf-8');
    page.pipe(res); 
  }
}).listen(8080);