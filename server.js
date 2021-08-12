var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.method == "POST"){
    var body = "";
    req.on('data', function (data) {
      body += data;
      fs.appendFile('logs.log', body+"\n", err => {
        if (err)
          console.log("Err");
      });
    });
    res.write("Appending contents to file");
    res.end();
  }
  else{
    var page = fs.createReadStream('page.html','utf-8');
    page.pipe(res); 
  }
}).listen(8080);