const readline = require('readline')
const rls=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rls.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    rls.close();
  });