const express = require('express');

const app = express();

app.listen(3000);

//sending html pages
app.get('/pages',(req,res)=>{
    res.sendFile('./views/pages.html',{root: __dirname});
});

app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root: __dirname});
});

app.get('/about',(req,res)=>{
    res.sendFile('./views/about.html',{root: __dirname});
});
//Redirect

app.get('/about_us',(req,res)=>{
    res.redirect('about')
});

//error pages

app.use((req,res)=>{
    res.status(404).sendFile('./views/errorpage.html',{root: __dirname});

});

// //send html.text to the server
// app.get('/',(req, res)=>{
//     res.send('<h2>Express</h2><p>send method includes the content-Type as well as the status code</p>')

// });