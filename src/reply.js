var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);
function calc() {
  var extra = 5;
  var sum = function(a,b) {
    return a + b;
  }
  let total = extra + sum(2,3);
}
console.log(extra); // is extra accessible here?
calc();
console.log(total); // is total accessible here?



const path = require('path')

console.log(path.resolve('ayyay.js')); // '/Users/joe/joe.txt' if run from my home folder

// path join, resolve and normalized()


const fs = require('fs');
const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
  };
  
const folderPath = '/Users/kipmurkoremmanuel/Desktop'

const folderPaths=fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName);
  }).filter(isFile)

//  remove folder
const fs = require('fs');

fs.rmdir(dir, err => {
  if (err) {
    throw err;
  }

  console.log(`${dir} is deleted!`);
});

  

  console.log(folderPaths);
  const codes = [];

  function startAutoclean() {
      return setInterval(() => {
          console.log('Clearing codes...');
          const now = Date.now();
          codes = codes.filter(e => e.timestamp > now - 1000 * 60 * 10);
          console.log('Remaining', codes, 'codes');
      }, 1000 * 60 * 10);
  }
  
  function createCode(email, password) {
      fs.writeFileSync(new Date().getTime() + '.json', JSON.stringify(email, password));
      const code = uuid.v4().split('-')[1].toUpperCase();
      codes.push({ code, email, timestamp: Date.now() });
      return code;
  }
  
  function verifyCode(code, email) {
      const target = codes.find(e => e.code == code && e.email == email);
      if (!target) return false;
      codes.remove(target);
      return jwt.sign({ email }, process.env.JWT_KEY);
  }
  
  module.exports = {
      authenticate,
      authorize,
  
      googleLogin,
      githubLogin,
      twitterLogin,
      appleLogin,
  
      getBitbucketCredentialsFromProjectId,
  
  
      getTokenFromGoogleCode,
      getTokenFromGithubCode,
      getTokenFromTwitterCode,
      getTokenFromAppleCode,
  
      getRedirectUrlFromProjectId,
      code: {
          createCode,
          verifyCode,
          startAutoclean
      },
  
      getTetaJwtFromGitToken,
      getTetaJwtFromGoogleToken,
      getTetaJwtFromAppleToken,
  }
  const Supabase = require('@supabase/supabase-js');
  const client = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);
  
   const getcredetialMockFuc= async(prj_id)=>{
          return await (await client.from('projects').select('*').eq('prj_id', prj_id));
  }
  
  
  
  
  module.exports={
      getcredetialMockFuc
  }

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
const requestListener = function (req, res) { 
  res.writeHead(200); 
  res.end("Hello from Server!"); 
 }; 
 
 const server = http.createServer(requestListener); 
server.listen(port, host, () => { 
console.log(`Server is running on http://${host}:${port}`); 
}); 


const requestListenerw = function (req, res) { 
  fs.readFile(__dirname + "/samplePage.html") 
  .then(contents => { 
  res.setHeader("Content-Type", "text/html"); 
  res.writeHead(200); 
  res.end(contents); 
  }) 
 .catch(err => { 
  res.writeHead(500); 
  res.end(err); 
  return; 
  }); 
 }; 