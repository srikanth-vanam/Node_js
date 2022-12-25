const { MongoClient }=require('mongodb')
const url='mongodb://localhost:27017';

const client=new MongoClient(url);

async function getData(){
    let result= await client.connect();
    let db=result.db('practice');
    console.log("response");
    return db.collection('sample'); // returning it to use in another files below lines are //ented 
    // let collection=db.collection('sample')
    // let response= await collection.find({}).toArray();
    // console.log(response);
    
}
//getData();
module.exports=getData;