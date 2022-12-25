const getData=require('./mongodbfile')

const insert=async ()=>{
    const data=await getData();
    const res= await data.insertMany(
        [
        {name:"Kohli ",fname:"Anushka"},
        {name:"note 9 ",brand:"redmi",price:260},
        {name:"blackberry ",brand:"nokia",price:280},
        {name:"selfie f1",brand:"oppo",price:310}
        ]
    );
    if(res.acknowledged)
    {
        console.log("data insertion done !")
    }
}
insert();