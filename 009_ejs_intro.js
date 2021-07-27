/*EJS is a simple templating language that lets you generate HTML markup with 
plain JavaScript. To install ejs with npm.
EJS templates are processed through the EJS view Engine on the server.
$ npm install ejs
*/
/* Server-side rendering (SSR) is the process of rendering web pages on a server 
and passing them to the browser (client-side), instead of rendering them in the browser. 
SSR sends a fully rendered page to the client; the client's JavaScript bundle takes 
over and enables the SPA framework to operate. */
const express = require('express');
const app = express();
//set the view
app.set('view engine', 'ejs');
//use another folder 
app.set('views','ejsviews');
//use the template
app.get('/',(req,res)=>{
    const title = "Home"
    const blogs = [
        {title:"Lorem ipsum dolor sit", snippet:"Optio adipisci ad iste accusantium suscipit perspiciatis odio voluptates, expedita error eum libero illum."},
        {title:"Amet consectetur adipisicing elit", snippet:"Sit amet consectetur adipisicing elit. Ipsa deleniti laudantium eligendi, nam obcaecati impedit commodi, "},
        {title:"Ipsa deleniti laudantium eligendi", snippet:"Deleniti laudantium eligendi, nam obcaecati impedit commodi, optio adipisci ad iste accusantium suscipit perspiciatis"}

        ];
    res.render('index',{blogs, title});
    console.log("Request from index!!!");

});
app.get('/about',(req,res)=>{
    const title = "About"
    res.render('about', {title});
    console.log("Request from about!!!");

});
app.get('/blogs/create',(req,res)=>{
    const title = "Create A Blog";
    res.render('create',{title});
    console.log("Request from create!!!");

});
app.use('/',(req,res)=>{
    const title = "Error"
    res.status(404).render('404', {title});
    console.log("Request from unknown!!!");

});
 app.listen(3030);