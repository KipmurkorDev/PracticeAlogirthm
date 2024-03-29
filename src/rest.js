const request = require('supertest');
const {server}=require('../src/index')

describe('Google Provider',() => {
    afterAll(async () => {server.close()});

    it('Google credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/google/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Google credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/google/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
   
});
describe('Github Provider',() => {
    afterAll(async () => {server.close()});

    it('Github credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/github/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Github credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/github/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
});
describe('Twitter Provider',() => {
    afterAll(async () => {server.close()});

    it('Twitter credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/twitter/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Twitter credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/twitter/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
});

describe('Apple Provider',() => {
    afterAll(async () => {server.close()});

    it('Apple credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/apple/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Apple credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/apple/56567676/mobile');
        expect(res.status).toBe(200);

    });
});

describe('Bitbucket Provider',() => {
    afterAll(async () => {server.close()});

    it('Bitbucket credetial With Invalid Prj_id', async () => {
        const res = await request(server).post('/auth/bitbucket/123/mobile');
        expect(res.status).toBe(500);
        expect(res.accepted).toBe(false);

    });
    it('Bitbucket credetial With Correct Prj_id', async () => {
        const res = await request(server).post('/auth/bitbucket/56567676/mobile');
        expect(res.status).toBe(200);
        expect(res.accepted).toBe(false);

    });
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