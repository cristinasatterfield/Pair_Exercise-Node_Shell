const fs = require('fs')
module.exports = function (cmdFile) {
  fs.readFile(cmdFile, 'utf8', (err, data) => {
    if (err) {
      throw err
    } else {
      console.log(data);
      process.stdout.write("\nprompt > ");
    }
  });
}
