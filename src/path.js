
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