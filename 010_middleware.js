const express = require('express');
const morgan = require('morgan');
/*Morgan is a logging package for node.js. It can generate log files for all the traffic that comes to your server. It has some cool tricks to help us in both development and production. */

const app = express();
//set the view
app.set('view engine', 'ejs');
//use another folder 
app.set('views','ejsviews');

//app.use(morgan('dev'));
app.use(morgan('combined')); 
//app.use(morgan('common'));
//use the template

//accessing static files
app.use(express.static('public'));

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