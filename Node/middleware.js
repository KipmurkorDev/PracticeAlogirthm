const VALID_KEYS_PATH = __dirname + '/valid-keys.txt';
const fs=require('fs')


const fileChecker = (filename, text) => {
  const contents = fs.readFileSync(filename, 'utf-8')

  return contents.toLowerCase().includes(text.toLowerCase())
}
module.exports = function (req, res, next) {
  let token=req.headers['x-api-key']
  if(token){
    let output=fileChecker(VALID_KEYS_PATH,token)
    if(output)next()
  } 
  return res.status(401)

};
const fs = require('fs');
const shortid = require('shortid');
// To generate a unique API KEY, use shortid.generate()
const LINE_ENDING = require('os').EOL;


module.exports = function (req, res) {
  let newKey=shortid.generate()+LINE_ENDING;
  fs.appendFile('valid-keys.txt', newKey, function (err) {
    if (err) throw err;
    res.status(201).send({"apiKey":newKey})
  });
};

