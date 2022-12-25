const mongoose=require('mongoose');
mongoose.connect("mongodb://localhost:27017/node-tutorial");
const BasicSchema=new mongoose.Schema({
    name:String,
    brand:String,
    price:Number
});

module.exports=mongoose.model('basic',BasicSchema);