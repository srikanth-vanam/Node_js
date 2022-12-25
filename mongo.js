const getData=require('./mongodbfile') // using separate file to read data..
// THIS IS TO READ DATA FROM MONGO DB ONLY
const main= async ()=>{
    let data= await getData();
    data=await data.find({}).toArray();
    console.warn(data);
}
main();


getData();