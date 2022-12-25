//              INCLUDING EXPRESS MODULE AND WRITING SOME DATA TO WEBPAGE
//              adding html to modify data and linking pages;


const express=require('express');
const app=express();

// app.get('',(req,res)=>{
//     // res.send("Hi this is the home page");
//     res.send(`
//     <h1>Hi this is the home page</h1> <a href="/about" >click here to go to about page </a>
//     `);
// })

// app.get("/about",(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="enter name" value="${req.query.name}" >
//     <input type="email" placeholder="enter email:"  >
//     <button>Click me </button>
//     `);
// })

// app.listen(4500);

//          TO INCLUDE HTML PAGES 

// const path=require('path');
// const { resourceUsage } = require('process');
// const newPath=path.join(__dirname,"new");

//app.use(express.static(newPath));// this line syntax is used for loading static pages onto a website......
// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${newPath}/about.html`)
// })

//        .....DYNAMIC PAGES.....

const reqFilter=(req,resp,next)=>{     //  MIDDLEWARE BASICS 
    if(!req.query.age){
        resp.send("Provide age")
    }
    else if(req.query.age<18){
        resp.send("You are not eligible ")
    }
    else{
        next();
    }
}
// app.use(reqFilter);
// instead of about page whatever page we use this middleware is applied to all.
app.get('/about',reqFilter,(_,resp)=>{ // so including reqfilter in app.get line we are using route level middleware
    resp.send("Welcome to about page")// and disable the app.use() line
})// to make middleware in diff. file we need to use import and export 
app.listen(4500);

const route=express.Router();
route.use(reqFilter);

route.get('/about',(_,resp)=>{ // so including route.get for applying middleware to the multiple route level middleware.
    resp.send("Welcome to about page")
})

route.get('/contact',(_,resp)=>{ // so including route.get for applying middleware to the multiple route level middleware.
    resp.send("Welcome to contact page")
})