/*eslint-disable*/
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let responseText = 'This is the list of our students\n';

  if (!databaseFile) {
    responseText += 'Cannot load the database';
    return res.status(500).type('text/plain').send(responseText);
  }

  try {
    const studentsInfo = await countStudents(databaseFile);
    responseText += studentsInfo;
    res.type('text/plain').send(responseText);
  } catch (error) {
    responseText += 'Cannot load the database';
    res.status(500).type('text/plain').send(responseText);
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
      const students = lines.slice(1).filter((line) => line.trim() !== ''); // Ignore empty lines

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

app.listen(port);

module.exports = app;
