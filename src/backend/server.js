const express=require('express')
app=express()




app.get('/', function (req, res) {
    res.send('Hello World!')
  })

port=5000||process.env.port
app.listen(port, console.log(`Server running ${port}`))