/*eslint-disable*/
const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else {
    res.writeHead(404);
    res.end('Page not found');
  }
});

app.listen(1245);

module.exports = app;
