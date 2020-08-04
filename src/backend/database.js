const mongoose = require('mongoose')

const URI= 'mongodb://localhost/blog'

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});

module.exports=mongoose;
