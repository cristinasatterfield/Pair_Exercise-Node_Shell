const fs = require('fs')
module.exports = function (cmdFile,done) {
  fs.readFile(cmdFile, 'utf8', (err, data) => {
    if (err) {
      done("Something went wrong!")
    } else {
      done(data);
    }
  });
}
