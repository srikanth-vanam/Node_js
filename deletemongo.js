const getData=require('./mongodbfile')

const deleteData=async ()=>{
    let data=await getData();
    let res= await data.deleteOne(
        {name:"selfie f1"}
    );
    if(res.acknowledged)
    {
        console.warn("deleted succesfully!");
    }
}
deleteData();