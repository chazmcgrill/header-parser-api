const express = require('express');
const app = express();

app.use(express.static('public'));

// serve index file for the main route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// request header info and present as json
app.get('/api/whoami', function(req, res) {
  const header = req.headers;
  const data = {
    ipaddress: header.host, 
    language: header['accept-language'].split(',')[0], 
    software: header['user-agent']
  };
  res.json(data);
});

const port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`server is running on port: ${port}`);
});