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