const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function isAdult(user) {
    return user.age >= 18;
  }
  
  const justine = {
    name: 'Justine',
    age: 'Secret!',
  };
  
  const isJustineAnAdult= isAdult(justine, "I shouldn't be here!");


  // Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require('fs');

const wasmBuffer = fs.readFileSync('/path/to/add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum); // Outputs: 11
});

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
const umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
    if(this.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      this.isOpen = true;
      return "Julia opens the umbrella!";
    }
  }
}


console.log(umbrella.open())