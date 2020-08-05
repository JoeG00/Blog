const writer={}
const article = require("../articleschema");
const { json } = require("express");

// returns all articles in database
writer.getArticles = async (req,res) =>{
    const arts= await article.find()
    res.json(arts)

};

// returns an article given an id
writer.getArticle = async (req, res)=>{
    const t =await article.findById(req.params.id)
    res.json(t)
}

// deletes an article given an id
writer.delteArticle=async (req,res)=>{
    const deleted= await article.findByIdAndDelete(req.params.id)
    res.json(`${deleted.title} was deleted`)

}
// creates an article
writer.createPost = async (req,res) => {
    const arc= new article({
        "title":req.body.title,
        "author":req.body.author,
        "content":req.body.content
    })
    await arc.save(req.body)
    res.json('Inserted to DB')

}

writer.updateArticle=async (req, res)=>{
    const {title, author, content} =req.body;
    const newTask={title, author, content};
    await article.findByIdAndUpdate(req.params.id, newTask)
    console.log(req.params.id)
    
    res.json("Updated")

}
module.exports = writer;
