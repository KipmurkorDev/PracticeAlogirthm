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