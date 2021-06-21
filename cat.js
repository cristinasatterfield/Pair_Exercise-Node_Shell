module.exports = function (cmdFile){
  const fs = require('fs')
  fs.readFile(cmdFile,'utf8', (err, data) => {
    if (err){
      throw err
    }else{
      console.log(data)
    }
  }); 
}