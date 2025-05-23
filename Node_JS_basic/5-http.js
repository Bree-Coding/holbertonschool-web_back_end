/*eslint-disable*/
const http = require('http');
const fs = require('fs');

const dbFile = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');
    countStudents(dbFile)
      .then((report) => res.end(report))
      .catch(() => res.end('Cannot load the database'));
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});


function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter(line => line.trim() !== ''); // Ignore empty lines

      const fields = {};

      for (const line of students) {
        const parts = line.split(',');
        const firstname = parts[0];
        const field = parts[3];

        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      let output = `Number of students: ${students.length}`;
      for (const field in fields) {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }

      resolve(output);
    });
  });
}

server.listen(1245);

module.exports = server;
