/*eslint-disable*/
const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = {};

    for (let i = 1; i < lines.length; i++) {
      const [firstname, , , field] = lines[i].split(',');
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(firstname);
    }

    const total = Object.values(students).reduce((acc, arr) => acc + arr.length, 0);
    console.log(`Number of students: ${total}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
