process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwdOutput = require('./pwd');
    pwdOutput(cmd);
  }else if(cmd === "ls"){
    const lsOutput =require('./ls');
    lsOutput(cmd);
  }else if(cmd.split(" ")[0] === 'cat'){
    const catArray = cmd.split(' '); 
    const catOutput =require('./cat');
    catOutput(catArray[1]);
  }
});
