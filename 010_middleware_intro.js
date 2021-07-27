/**Read a summary about middleware below */
var express = require('express');
var app = express();
//Middleware Function 1 to log some req properties
var reqProperties = (req,res, next)=>{
    console.log("New Request Made!!!");
    console.log(`Hostname: ${req.hostname}`);
    console.log(`Path: ${req.path}`);
    console.log(`Method: ${req.method}`);
    next();
}; 
app.use(reqProperties);

//Adding some middleware functions to log text
var myLogger = function (req, res, next) {
    console.log('LOGGED!!')
    next()
  }
app.use(myLogger);

//Adding middleware to log time
var requestTime = function (req, res, next) {
    req.requestTime = Date();
    next()
  }
app.use(requestTime)



app.get('/',(req,res)=>{
    let msg = "Hello, Midddleware, The day is :" + req.requestTime;
    res.send(msg);
});
app.listen(3000,()=>{
    console.log("Server starts listening at port 3000!!!")
});

/**
 Middleware functions are functions that have access to the request object (req), 
 the response object (res), and the next function in the application’s 
 request-response cycle. 
 */
/*
Middelware is anycode that runs (on the server) between getting a request and sending
a response.
Middleware can be used to log details of every request, to authenticate, to parse JSON data, 
and return 404 pages 

 */
/* 
The next function is a function in the Express router which, when invoked, 
executes the middleware succeeding the current middleware. 
*/
/*
Middleware functions can perform the following tasks:

    Execute any code.
    Make changes to the request and the response objects.
    End the request-response cycle.
    Call the next middleware in the stack.

*/
