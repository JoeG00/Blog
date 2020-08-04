const writer={}
const article = require("../articleschema");
const { json } = require("express");

writer.getArticles = async (req,res) =>{
    const arts= await article.find()
    res.json(arts)

};

writer.getArticle = (req, res)=>{
    res.json({"message":"Will return single article"})
}
writer.createPost = async (req,res) => {
    const arc= new article({
        "title":req.body.title,
        "content":req.body.content
    })
    await arc.save(req.body)
    res.json('Inserted to DB')

}
module.exports = writer;
