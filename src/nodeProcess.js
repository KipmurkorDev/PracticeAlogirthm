const fs = require('fs-extra')

fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))

//   
const fs = require('fs-extra')

fs.copy('/tmp/myfile', '/tmp/mynewfile')
  .then(() => console.log('success!'))