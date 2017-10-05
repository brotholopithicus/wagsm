const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'data.json'), (err, data) => {
  if(err) throw err;

});

function getData() {
  fs.readFile(path.resolve(__dirname, 'data.json'), (err, data) => {
    if(err) throw err;
    return data;
  });
}

module.exports = {
  getData
}
