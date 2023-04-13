class Node {
    // Each node has two properties, its value and a pointer that indicates the node that follows
    constructor(value){
        this.value = value
        this.next = null
    }
}

// We create a class for the stack
class Stack {
    // The stack has three properties, the first node, the last node and the stack size
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    // The push method receives a value and adds it to the "top" of the stack
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        } else {
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size
    }
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--
        return temp.value
    }
}

const stck = new Stack

stck.push("value1")
stck.push("value2")
stck.push("value3")

console.log(stck.first) /* 
        Node {
        value: 'value3',
        next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
        }
    */
console.log(stck.last) // Node { value: 'value1', next: null }
console.log(stck.size) // 3

stck.push("value4")
console.log(stck.pop()) // value4

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