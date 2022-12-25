const getData=require('./mongodbfile')

const updateData=async ()=>{
    let data=await getData();
    let res= await data.updateOne(
        
        {name:'Alice'},{
            $set:{fname:'Srikanth'}
        }
        
    );
        console.warn(res);
}
updateData();