const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const router = require("../server/routes/authRoutes");
const cors = require('cors');


const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

//app.get('/api', (req, res) => {
//res.json({ "users": ["user1", "user2", "user3"] })
//})

//const dbIRI = 'mongodb+srv://alibaba1990:19901990@cluster0.mcpgbvc.mongodb.net/?retryWrites=true&w=majority';
const dbIRI = 'mongodb+srv://data70:cute12@cluster0.vk5gxdo.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbIRI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));



app.get('*', checkUser);    //its going to be applied to every single get request/route
app.get('/', (req, res) => res.render('home'));
app.use(authRoutes);