process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwdOutput = require('./pwd');
    pwdOutput();
  } else if (cmd === "ls") {
    const lsOutput = require('./ls');
    lsOutput();
  } else if (cmd.split(" ")[0] === 'cat') {
    const catArray = cmd.split(' ');
    const catOutput = require('./cat');
    catOutput(catArray[1]);
  } else if (cmd.split(" ")[0] === 'curl') {
    const curlArray = cmd.split(' ');
    const curlOutput = require('./curl');
    curlOutput(curlArray[1]);
  }
});
