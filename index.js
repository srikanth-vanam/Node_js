const express=require('express');
require('./config');
const basicData=require('./node-basic');
const app=express();

app.use(express.json())
app.post('/create',async (req,resp)=>{
    let data=new basicData(req.body);
    let result=await data.save();
    console.log(result)
    resp.send(result);
})
// IN THE SAME WAY AS POST, PUT AND DELETE ALSO;

// SEARCH API 
app.get("/search/:key",async (req,resp)=>{
    console.log(req.params.key);
    let data=await basicData.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
        ]
    }
    )
    resp.send(data);
})

app.listen(6200);
// ................TO UPLOAD A FILE ............
const multer=require('multer')

const uploader =multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"new")
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname +"-"+Date.now()+".txt")
        }
    })
}).single("user_file");

app.get('/upload', uploader, (req,resp)=>{

    resp.send("file uploaded")
})
// os module and Events and EventEmitter 
const os=require('os')
console.log(os.arch())