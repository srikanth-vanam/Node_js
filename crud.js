const fs=require('fs');
const path=require('path')
const dirPath=path.join(__dirname,"Crud");
filePath=`${dirPath}/crud.txt`;
//         TO WRITE INTO A FILE
// fs.writeFileSync(filePath,'These are crud operations');
//            TO READ A FILE
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item)
// })
//          TO UPDATE A FILE
// fs.appendFile(filePath," create, read, update, delete",(err)=>{
//     if(!err) console.log("successfully updated");
// })
//          TO RENAME A FILE
// fs.rename(filePath,`${dirPath}/crudRenamed.txt`,(err)=>{
//     if(!err) console.log("renamed successfully")
// })
//       to delete   
// fs.unlinkSync(`${dirPath}/crudRenamed.txt`);
//         PROMISE TO HANDLE DISADV... IN ASYNC FUNCTIONS;
let a=20;
let b=0;

let wait=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

wait.then((data)=>{
    b=data;
    console.log(a+b);
})