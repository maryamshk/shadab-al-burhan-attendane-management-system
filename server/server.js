const express = require('express');
const authRoutes = require('./routes/authRoutes');
const mongoose = require('mongoose');
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());


// view engine
app.set('view engine', 'ejs');

// app.get('/api', (req, res) => {
//     res.json({ "users": ["user1", "user2", "user3"] })
// })

const dbIRI = 'mongodb+srv://alibaba1990:19901990@cluster0.mcpgbvc.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbIRI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(5000))
    .catch((err) => console.log(err));

// app.listen(5000, () => console.log("listening"))

// app.get('/signup', (req, res) => res.render('signup'))
app.use(authRoutes);