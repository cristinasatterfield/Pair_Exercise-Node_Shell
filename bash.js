process.stdout.write('prompt >');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    const pwdOutput = require('./pwd');
    pwdOutput(cmd);
  }
  process.stdout.write('\nprompt >');
});
