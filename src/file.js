fs.readFile("/file.md", (err, data) => {
    if (err) throw err;
  });
  
  myAwesomeFunction();
  var employees=[]
employees[0]={name:"George", age:32, retiredate:"March 12, 2014"}
employees[1]={name:"Edward", age:17, retiredate:"June 2, 2023"}
employees[2]={name:"Christine", age:58, retiredate:"December 20, 2036"}
employees[3]={name:"Sarah", age:62, retiredate:"April 30, 2020"}



function pluck(list, propertyName) {
    return list.map(function(i) {
      return i[propertyName];
    });
  }

const jwt = require('jsonwebtoken');

function signJWT(data) {
    return jwt.sign(data, process.env.JWT_KEY, { expiresIn: '7d' });
}


module.exports = {
    signJWT
}
const Supabase = require('@supabase/supabase-js');

const client = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

const authClient = Supabase.createClient(process.env.SUPA_URL, process.env.SUPA_KEY);

module.exports = {
    client,
    authClient
};