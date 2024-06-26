const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const secret = 'wakandaforever';
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials:true,origin:'http://localhost:3000'}));            // This is a middleware that allows us to make requests from a different domain
app.use(express.json());
app.use(cookieParser);        // This is a middleware that allows us to parse JSON data from the client


mongoose.connect('mongodb+srv://LONZEE:YKO2YsVqA1sYHqRE@charity.zdmunij.mongodb.net/?retryWrites=true&w=majority&appName=Charity');  

app.post('/signup', async (req,res) => {
    const {username, password} = req.body;
    try{const userDoc = await User.create({
        username,
         password: bcrypt.hashSync(password, salt),
        });
    res.json(userDoc);
} catch(e){
    res.status(400).json(e);
}

});

app.post('/login', async (req,res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const passOK= bcrypt.compareSync(password, userDoc.password);
    if (passOK){
        jwt.sign({username, id:userDoc._id}, 'secret',{},(err,token) => {
            if (err) throw err;
            res.cookie('token',token).json('ok');
        }   );
    } else {
        res.status(400).json({message: 'Invalid password'});
    }
});

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.listen(4000);