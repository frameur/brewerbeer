const express = require('express');
const ejs = require('ejs');
const path = require('path');
const session = require('express-session');
const mysql = require('mysql');
const port = 1998;
const app = express();

//Template
app.set('view engine', 'ejs');

// Express Static
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Express-session
app.use(session({
    secret: 'brewerbeer',
    resave: false,
    saveUninitialized: true,
    name: 'biscuit',
    cookie: { maxAge: 60000 }
  }))
  
  // MySQL
const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'brewerbeer',
    multipleStatements: true
});

db.connect((err) => {
    if (err) { throw err;}
    console.log('Connecté à la base MySQL');
});
global.db = db;

// Route
const { getHomePage} = require('./routes/home');

//api
app.get('/', getHomePage)




app.listen(port, () => {
    console.log(`lancé sur le port ${port}`);
    
});