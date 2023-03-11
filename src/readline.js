const readline = require('readline')
const rls=readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  rls.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    rls.close();
  });
  const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});