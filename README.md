# nodejs_codes


Node.js is a very powerful JavaScript-based platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world.

V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others.

V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.

V8 provides the runtime environment in which JavaScript executes. The DOM, and the other Web Platform APIs are provided by the browser.

    v8: Javascript Engine for Chrome
    SpiderMonkey: JS engine for firefox
    JavascriptCore/Nitro:- JS engine for Safari
    Chakra: JS engine for Edge

Recently Edge been rebuilt using Chromium and the V8 engine.

V8 is the engine that powered Node.js. Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant. performant means functioning well or as expected.

A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

Node. js comes with virtual environment called REPL (aka Node shell). REPL stands for Read-Eval-Print-Loop. It is a quick and easy way to test simple Nodejs/JavaScript code. Jshint helps developers to see the error. jshint jsfilename
To call Nodejs application use:
node app.js

The node command is the one we use to run our Node.js scripts. If we omit the filename, we use it in REPL mode. REPL also known as Read Evaluate Print Loop is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution.

In REPL mode, You can inspect the globals you have access to by typing global. and pressing tab, if you want to inspect Number, type Number dot and tab. some of the globals are Array, Boolean, http, https, os, WebAssembly, RegExp, NaN, os, fs, Promise, Math, require, and so on.

Note: You can pass any arguments from a command line and accepts as process.argv;

There might be cases where it's useful to print the call stack trace of a function, maybe to answer the question how did you reach that part of the code? You can do so using console.trace(). You can easily calculate how much time a function takes to run, using time() and timeEnd() example console.time();.

Node.js has a built-in module system. A Node.js file can import functionality exposed by other Node.js files. use const app = require('pathname') to import javascript files. The javascript file should explicitly expose files by using the following Module.exports = theExposedVariable. Functionality must be exposed before it can be imported by other files. Any other object or variable defined in the file by default is private and not exposed to the outer world. This is what the module.exports API offered by the module system allows us to do. When you assign an object or a function as a new exports property, that is the thing that's being exposed, and as such, it can be imported in other parts of your app, or in other apps as well.
//Javscript File let us say app.js in the same directory
const someMath = Math.random();
const someText = "Hello module!!!"
const moreText = "Not Exposed"
module.exports = {someMath, someText};
//Main JS files
const app = require('./app')
console.log(app.someMath); //random number
console.log(app.someText); //Hello Module
console.log(app.moreText); //undefined

Summary

    Node:
    Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Runtime is the running phase of the program.
    Node uses chrome v8 javascript engine to execute code outside the browser
    Built on google chrom's javascript engine.
    Used to built I/O intensive web applications, such as web servers, command line tools, native apps, video games, drone software, a whole lot more.
    Runs in a single process
    Provides a set of asynchronous I/O primitives
    Written using non-blocking paradigms

NPM

NPM stands for Node Package Manager. It is a library of thousands of packages published by other developers that we can use for free. NPM is a command line tool to easily install and manage those packages in our Node projects. npm is the standard package manager for Node.js.
To install a single package npm install < package-name > example npm install express

npm is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects; second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

Module in Node. js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node. js application. Each module in Node. js has its own context, so it cannot interfere with other modules or pollute global scope.

Consider modules to be the same as JavaScript libraries. A set of functions you want to include in your application.
Packages published to the registry must contain a package.json file. This helps others to manage and install your packages.

    A package.json file
    lists the packages your project depends on
    specifies versions of a package that your project can use using semantic versioning rules
    makes your build reproducible, and therefore easier to share with other developers
    To make your package easier to find on the npm website, include a custom description in your package.json file.
    To include package.json file in your application, just run the following command $ npm init. To generate a new json Package without having it ask any questions: $ npm init -y 

Nodejs Webserver that uses http module
Nodejs Web server

    Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
    require() is used to consume modules. It allows you to include modules in your app. You can add built-in core Node. js modules, community-based modules (node_modules), and local modules too.
    The http.server.listen() is an inbuilt application programming interface of class Server within the http module which is used to start the server from accepting new connections.
    The createServer() method of http creates a new HTTP server and returns it.

    The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.
    Whenever a new request is received, the request event is called, providing two objects: a request (an http.IncomingMessage object) and a response (an http.ServerResponse object). Those 2 objects are essential to handle the HTTP call.The first provides the request details. In the above example, request(req) is not used, but you could access the request headers and request data. The second is used to return data to the caller.
    The process object in Node. js is a global object that can be accessed inside any module without requiring it.

    The http.createServer() method turns your computer into an HTTP server.When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with the transaction, request and response.
        The function is called a requestListener, and handles request from the user, as well as response back to the user.

Summary
The node js http module, fs module, os module, event module,
The key difference between JavaScript libraries and frameworks is that libraries consist of functions that an application can call to perform a task, while a framework defines how a developer designs an application
Express

Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js. According to express website, express is a fast, unopinionated, minimalist web framework for Node.js
Express Inititalization

    require('express'):- imports the express module
    express():- Creates an Express application. The express() function is a top-level function exported by the express module.
    app.get():- Routes HTTP GET requests to the specified path with the specified callback functions.
    app.listen():- it returns an instance of http, whichstarts a UNIX socket and listens for connections on the given path. This method is identical to Node’s http.Server.listen(). Use https.createServer if you needed to serve your app using HTTPS, as app.listen only uses the http module.

Further Explanation

The first two lines require() (import) the express module and create an Express application. This object, which is traditionally named app, has methods for routing HTTP requests, configuring middleware, rendering HTML views, registering a template engine, and modifying application settings that control how the application behaves (e.g. the environment mode, whether route definitions are case sensitive, etc.)

app.get shows a route definition. The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. The callback function takes a request and a response object as arguments, and calls send() on the response to return the string "Hi".

The final block starts up the server on a specified port ('3000') and prints a log comment to the console. With the server running, you could go to localhost:3000 in your browser to see the example response returned.

The process core module of Node.js provides the env property which hosts all the environment variables that were set at the moment the process was started. Note: process does not require a "require", it's automatically available.

Serving Static Files
To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:
express.static(root,[options])

The root argument specifies the root directory from which to serve static assets.

Example to serve images, css files and javascript in a directory named 'public'
app.use(express.static('public')); //app.use executes express.static everytime when the server runs

app.use:- Mounts (organize and initaialize) the specified middleware function or functions at the specified path: the middleware function is executed when the base of the requested path matches path.
Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.

Middleware

Middleware functions are functions that have access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.

Summary
require, process, express(), app.use, app.listen, process.exit
EJS

Template engine helps us to create an HTML template with minimal code. It allows programmers to define a preset pattern for a webpage, that we can dynamically modify.
To install ejs using npm just run npm install ejs
To set view engine app.set('view engine', 'ejs')
 → Note app comes from const express = require('express'); const app = express();
To have an absolute path use: app.set('views', path.join(__dirname,'/views'))
 →Note: views is a folder but the path module came from const path = require('path')
 →Note: You dont need to instantiate ejs, it is already with express but you have to instantiate path.

Examples
<% if (user) { %> //no output
<%= user.name %>
//outputs the value
<% } %> //no output
layouts
<%- include('header'); -%> //outputs the unescaped value into the template

Title


My page

<%- include('footer'); -%> //outputs the unescaped value into the template

EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. No religiousness about how to organize things. No reinvention of iteration and control-flow. It's just plain JavaScript.
Embedded JavaScript Tags
EJS Partials

Partials come in handy when you want to reuse the same HTML across multiple views. <%- include('pathname'); %>
Keywords
app.set(value,name); app.render, view engine, path.join, app.get, app.use
REST
REST (Representational State Transfer) is an "architectural style for distributed hypermedia systems". hypermedia is an extension of hypertext that provides multimedia facilities. REST is basically set of guidelines for how a client + server should communicate and perform CRUD operations on a given resource.

The main idea of REST is treating data on the server-side as resources than can be CRUDed. The most common way of approaching REST is in formatting the URLs and HTTP verbs in your applications.
Like any other architectural style, REST also does have it’s own 6 guiding constraints/guiding principles which must be satisfied if an interface needs to be referred as RESTful.

    Guiding principles of REST / architectural constraints of REST
    Client-server:- REST is a client-server architecture. The client and the server both have a different set of concerns. The server stores and/or manipulates information and makes it available to the user in an efficient manner. The client takes that information and displays it to the user and/or uses it to perform subsequent requests for information. This separation of concerns allows both the client and the server to evolve independently as it only requires that the interface stays the same.
    Stateless:- REST is stateless. That means the communication between the client and the server always contains all the information needed to perform the request. There is no session state in the server, it is kept entirely on the client's side. If access to a resource requires authentication, then the client needs to authenticate itself with every request.
    Cacheable:- REST is cacheable. The client, the server and any intermediary components can all cache resources in order to improve performance.
    Uniform Interface:- REST provides a uniform interface between components. This simplifies the architecture, as all components follow the same rules to speak to one another. It also makes it easier to understand the interactions between the different components of the system. A number of constraints are required to achieve this.
    Layered approach:- REST is a layered system. Individual components cannot see beyond the immediate layer with which they are interacting. This means that a client connecting to an intermediate component, like a proxy, has no knowledge of what lies beyond. This allows components to be independent and thus easily replaceable or extendable.
    Code on demand: - REST optionally provides code on demand. Code may be downloaded to extend client functionality. This is optional however because the client may not be able to download or run this code, and so a REST component cannot rely on it being executed.

    Principles of Software Engineering
    Separation of Concerns:- In computer science, separation of concerns (SoC) is a design principle for separating a computer program into distinct sections such that each section addresses a separate concern. A data structure component concerns i.e. basic functionality and support for data integrity is easier to use, if they are divided as much as posible into separate sets of client functions.
    Generality: - “Generality can be characterized as a state or quality of being not limited to one particular case.” “The principle of generality is important in designing software that is free from unnatural restrictions and limitations, and that survives beyond its expected lifetime.
    Anticipation of change: - Software requirements inevitably will change either during the development or after the software has launched. When changes occur, additional costs occur, either in money or time. The purpose of anticipating changes is to help keep these costs low. The idea is to not just anticipate changes, but to plan for them.
    Abstraction:- the process of removing physical, spatial, or temporal details or attributes in the study of objects or systems to focus attention on details of greater importance. Identify the important aspects of a phenomenon and ignore its details
    Rigor and formality:- When problems occur, they become difficult to resolve. The rigor of a software development project is achieved by setting rules into the process. Every person involved in the project has to observe the rules. With rigor, a project can carry on smoothly without hindrances. However, when projects are lacking in rigor, they are doomed to run into problems and fail, resulting in unreliable products, high costs, and time overrun. Rigor enhances understandability, improves reliability, facilitates assessment, and controls cost. Formality is a rigor at the highest degree, it means software process is driven and evaluated by mathematical laws
    Incrementality:- Process proceeds in a stepwise fashion (increments). Deliver subsets of a system (prototype) early to get early feedback from expected users, then add new features incrementally. Deal first with functionality, then turn to performance. First step: quick-and-dirty solution. Second step: more efficient (i.e., cleaner) design
    Modularity:- implies separating software into components according to functionality and responsibility. A complex system may be divided into simpler pieces called modules. A system that is composed of modules is called modular.

    Resource
    The initial concept of the RESTful API is its resource and its functionality. It acts as an object of OOP (Object Oriented Programming) language or a database entity. As the resources are recognized, they're determined using a standard format so that the server can transmit the resource in the specific developer's format.
    A resource can be defined as a vital element to be referenced within a client-server system. REST architecture treats all of its content as a resource, which includes Html Pages, Images, Text Files, Videos, etc. Access to resources is provided by the REST server where REST client is used for accessing as well as modification of resources. All of its resources get identified via URI, which is abbreviated as Uniform Resource Identifier.
    Resources are identified by uniform resource identifiers, also known as URIs. Sometimes internationalized resource identifiers, or IRIs, may also be used, but these can be directly translated into a URI.
    A resource is an abstract concept. In a REST system, any information that can be named may be a resource. This includes documents, images,a temporal service, a collection of other resources, a non-virtual object (e.g. a person),a collection of resources and any other information. Any information that can be the target of an hypertext link can be a resource.
    REST uses a resource identifier to identify the particular resource involved in an interaction between components.
    The state of the resource at any particular timestamp is known as resource representation. It shall be self-descriptive and consists of data, metadata describing the data and hypermedia links which can help the clients in transition to the next desired state.
    The data format of a representation is known as a media type. The media type identifies a specification that defines how a representation is to be processed. A truly RESTful API looks like hypertext. Every addressable unit of information carries an address, either explicitly (e.g., link and id attributes) or implicitly (e.g., derived from the media type definition and representation structure).

HTTP Request Methods

HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.

GET
    The GET method requests a representation of the specified resource. Requests using GET should only retrieve data
HEAD
    The HEAD method asks for a response identical to that of a GET request, but without the response body.
POST
    The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
PATCH
    The PATCH method is used to apply partial modifications to a resource.
PUT
    The PUT method replaces all current representations of the target resource with the request payload.
DELETE
    The DELETE method deletes the specified resource.
OPTIONS
    The OPTIONS method is used to describe the communication options for the target resource.
CONNECT
    The CONNECT method establishes a tunnel to the server identified by the target resource.
TRACE
    The TRACE method performs a message loop-back test along the path to the target resource.

    GET
    Used to retrieve information.
    Data is sent via query string.
    Information is plainly visible in the URL.
    Limited amount of data can be sent.

    POST
    Used to post data to the server.
    Used to write/create/update.
    Data is sent via request body, not a query string.
    Can send any sort of data (JSON).

Parsing the Request Body
var express = require('express')
var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
console.log(req.body)
res.json(req.body)
})
req.body contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().
express.json() is used for parsing application/json. It is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.urlencoded({ extended: true })) is used for parsing application/x-www-form-urlencoded. It is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
res.json([body]) : -Sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify(). The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
