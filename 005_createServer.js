/*HTTP is a client server protcol which allows the fetching of resources. 
In general, Clients and servers communicate by exchanging individual messages.
 The messages sent by the client, usually a Web browser, are called requests 
 and the messages sent by the server as an answer are called responses. */
 const http = require('http'); // a main module used to create a server
 const server = http.createServer((req,res)=>{
     console.log(`Got a request from the browser with url: localhost:3000 ${req.url}`);
    // console.log(req.url, req.method);
    //Response to the browser
    //console.log(res);
    res.setHeader('content-Type', 'text/html'); //Sets a single header value for implicit headers.
    res.write("<h1>Hello Message from Node!!!</h1>");
    console.log("Response is sent from the server");
    res.end();

 });
 server.listen(3000, 'localhost', ()=>{
     console.log("Server is listening on port 3000");
 })
