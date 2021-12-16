const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const {json}= require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();



// assign a unique local hostn
const port = 5000;

app.use(cors());

app.use(json());

// initial route
app.get("/",function(req, res){
    res.send('welcome to homepage');
}
);
//assign routes to app and identify within a particular path
app.use('/todos', todoRoutes);

app.listen(port, function(){
    console.log(`listening on http:localhost:${port}`);
});

const dbURI = "mongodb+srv://Priscilla-fianu:Elikplim4@cluster0.x1v0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(function(result) {
        console.log('Database is connected');
    })
    .catch((err) => console.log(err));