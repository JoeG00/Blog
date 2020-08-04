const {Schema, model } = require ("mongoose")

const Article= new Schema (
    {
        title:{ type: String, required: true},
        content: { type: String, required: true},
        date:Date,
    },{
        timestamps:true,
    },

);
module.exports =model('Article', Article);