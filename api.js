const getData=require('./mongodbfile')
const express=require('express');
const { mongodb }=require('mongodb')
const app=express();

app.get('/',async (req,resp)=>{
    let data= await getData();
    data= await data.find().toArray();
    console.log(data);
    resp.send(data);
});

app.use(express.json())
app.post('/',async (req,resp)=>{
    let data= await getData();
    console.log(req.body);
    let res= await data.insertOne(req.body)
    resp.send(res);
});

//  PRACTISE SESSION
    app.put('/',async (req,resp)=>{
        let data= await getData();
        console.log(req.body);
        let res= await data.updateOne(
            {name:req.body.name},
            {$set:req.body}
        )
        resp.send(res);
    })

    app.delete('/:id',async (req,resp)=>{
        console.log(req.params.id);
        let data= await getData();
        let res= await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)}// object.id not working
        )
        resp.send(res);
    })

// app.delete('/:id',(req,resp)=>{
//     console.log(req.params.id);
//     resp.send("done")
// })
app.listen(6200);