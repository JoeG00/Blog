const mongoose = require('mongoose')

const URI= 'mongodb://localhost/blog'

mongoose.connect(URI)
    .then(db=> console.log('DB is connected') )
    .catch(err=> console.error(err))

const{Schema}=mongoose;
const ArticleSchema=new Schema(
    {
        title: {type:String, required:true },
        content:{type:String, required:true}

    })

module.exports=mongoose.model('Task', TaskSchema);

// module.exports=mongoose;
