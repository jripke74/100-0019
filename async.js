const { fuchsia } = require('color-name');
const fs = require('fs/promises');

function readFile() {
  let fileData;

  // fileData = fs.readFile('data.txt', function(error, fileData) {
  //   console.log('File parsing done!');
  //   console.log(fileData.toString());

  // });

  fs.readFile('data.txt')
    .then(function (fileData) {
      console.log('File parsing done!');
      console.log(fileData.toString());
      // return anotherAsyncOperation;
    })
    .then(function () {})
    .catch(function(error) {
      console.log(error);
    });

  console.log('Hi there!');
}

readFile();
