// console.log("welcome")
// const http=require('http');
// const dataControl=(req,res)=>
// {
//     res.write("<h1> Hello all, This is Vanam Srikanth </h1>");
//     res.end();
// };
// http.createServer(dataControl).listen(4500);
//  console.log("Package.json");
// const http=require('http');
// const data=require('./data');
// http.createServer((req,resp)=>{
//     resp.writeHead(200,{'Content-Type':'application\json'});
//     resp.write(JSON.stringify(data));
//     resp.end;
// }).listen(5000);

//          INPUT FROM COMMAND LINE

// const fs=require('fs');
// const input=process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log("invalid option");
// }

//          CREATES MUL FILES IN FOLDER;
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
for (let i = 0; i <4; i++) {
    fs.writeFileSync(dirPath+"/hello"+i+".txt", "a sample text" );
    
}
