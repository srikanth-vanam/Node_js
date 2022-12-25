const express=require('express')
const app=express();
const mysql=require('mysql');
const con=require('./mysql_config')
app.get("/",(req,resp)=>{
    con.query("select * from employee",(err,res)=>{
        if(err){
            resp.send("error ")
        }
        else{
            resp.send(res)
        }
    })
});
app.use(express.json());
app.post('/',(req,resp)=>{
    const data=req.body
    con.query("Insert into employee SET?",data,(err,res,fields)=>{
        if(err) err;
        resp.send(res);
    })
})

// app.put('/',(req,resp)=>{
app.put('/:salary',(req,resp)=>{
    // const data=["Ram Charan",2]
    const data=[req.body.id,req.body.Lname,req.params.salary]
    con.query("Update employee SET id=?,Lname=?  where salary=?",data,(err,res,fields)=>{
        if(err) throw error;
        resp.send(res)
    })
})
// delete api 
app.listen(5200);