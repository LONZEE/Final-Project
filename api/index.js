const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://LONZEE:YKO2YsVqA1sYHqRE@charity.zdmunij.mongodb.net/?retryWrites=true&w=majority&appName=Charity');  

app.post('/signup', (req,res) => {
    const {username, password} = req.body;
    res.json({requestData:{username, password}});

});

app.listen(4000);
//mongodb+srv://LONZEE:YKO2YsVqA1sYHqRE@charity.zdmunij.mongodb.net/
//YKO2YsVqA1sYHqRE