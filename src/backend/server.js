const express=require('express')
const morgan= require('morgan')
const cors=require('cors')
const { json } = require('express')
app=express()
l=[]


// app.use(cors)


app.use(morgan('dev'))
app.use(express.json());



app.get('/ed',(req, res)=> {
    res.send(res.send(l))
  });

app.post("/articles", (req,res)=>{
  l.push(req.body.articles)
  res.send("Articles added")
});



port=4000||process.env.port
app.listen(port, console.log(`Server running ${port}`))