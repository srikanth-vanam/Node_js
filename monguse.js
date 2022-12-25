
// mongoose and CRUD WITH MONGOOSE 
const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/node-tutorial");
const BasicSchema=new mongoose.Schema({
    name:String,
    brand:String,
    price:Number
});

const main= async ()=>{ 
    const BasicModel=mongoose.model('basic',BasicSchema);
    let data=new BasicModel({ name:"old-new phone", brand:"old-new", price: 250+100 })
   const res= await data.save();
    console.log(res);
}
//main();

const updater=async ()=>{
    const BasicModel=mongoose.model('basic',BasicSchema);
    //let data=new BasicModel.updateOne({ name:"new phone", brand:"new", price: 150 })
   let res= await BasicModel.updateOne(  
       {name:"new phone"},
       {$set:{price:1000}}
   )
    console.log(res);
}
//updater();

const deleter=async ()=>{
    const BasicModel=mongoose.model('basic',BasicSchema); 
    let data=await BasicModel.deleteOne({name:"old-new phone"});
    console.log(data);
}

deleter();