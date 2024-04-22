const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();

const salt = bcrypt.genSaltSync(10);

app.use(cors());            // This is a middleware that allows us to make requests from a different domain
app.use(express.json());        // This is a middleware that allows us to parse JSON data from the client


mongoose.connect('mongodb+srv://LONZEE:YKO2YsVqA1sYHqRE@charity.zdmunij.mongodb.net/?retryWrites=true&w=majority&appName=Charity');  

app.post('/signup', async (req,res) => {
    const {username, password} = req.body;
    try{const userDoc = await User.create({
        username,
         password: bcrypt.hashSync(password, salt),});
    res.json(userDoc);
} catch(e){
    res.status(400).json(e);
}

});


app.listen(4000);