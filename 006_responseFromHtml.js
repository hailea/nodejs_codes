//Sending a response from a single html pages
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    res.setHeader('content-Type','text/html');
    fs.readFile('./views/pages.html',(err,data)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.setHeader('content-Type','text/html');
          /*  res.write(data);
            res.end();*/
            
            res.end(data);
            console.log("File is Sent to the Browser!!!");
        }
    
    });
});

server.listen(3000,'localhost',()=>{
    console.log("Server is listening on Port 3000!!!")
});

// //Sending a response from html pages
// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     res.setHeader('content-Type','text/html');
//     let path = './views/';
//     switch (req.url){
//         case '/':
//             path += pages.html;
//             break;
//         case '/about':
//             path += about.html;
//             break;
//         default:
//             path += errorpage.html;
//             break;
//     }

//     fs.readFile(path,(err,data)=>{
//         console.log(path);
//         if(err){
//             console.log(err);
//             res.end(err);
//         }
//         else{
//             res.setHeader('content-Type','text/html');
//           /*  res.write(data);
//             res.end();*/
//             res.end(data);
//         }
    
//     });
// });

// server.listen(3000,'localhost',()=>{
//     console.log("Server is listening on Port 3000!!!")
// });
