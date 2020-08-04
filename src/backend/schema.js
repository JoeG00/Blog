const {Schema, model} = require("mongoose")

const A= new Schema({
    title:String,
    author:String,
    content:{
        type:String,
        required:true
    },
    timestamps:true,
    date:{
        defal:Data.now()
    }
    

})

module.exports=model('Article', A)