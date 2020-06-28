const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const session = require('express-session');
const mysql = require('mysql');
const dotenv = require ('dotenv');
const port = 1998;
const app = express();

//Template
app.set('view engine', 'ejs');

// Express Static
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


dotenv.config({path: './.env'})
  
//mysql
const db = mysql.createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database:  process.env.DATABASE,
    multipleStatements: true
    
});

db.connect((err) => {
    if (err) { throw err;}
    console.log('Connecté à la base MySQL: brewerbeer');
});
global.db = db;

//express-session
app.use(session({
    secret: 'beerbeerbeer!',
    resave: false,
    saveUninitialized: true,
    name: 'biscuit',
    cookie: { maxAge: 60000 }
  }))


// Controller
const homeRoutes = require('./routes/home');
//admin
// const adminRoutes = require('./routes/admin');

const authRoutes = require('./routes/auth');

// Admin
// app.use('/admin', auth,  adminRoutes);

// Authentification
app.use('/auth',  authRoutes);

// Route
const {getHomePage} = require('./routes/home');


//api
app.get('/', getHomePage)

app.get('*', function(req, res, next){
  res.status(404);
  res.render('404.ejs', {
      title: "Cette page n'existe pas.",
  });
});



app.listen(port, () => {
    console.log(`lancé sur le port ${port}`);
});