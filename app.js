const express = require('express');
const ejs = require('ejs');
const path = require('path');
const port = 1998;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Route
const { getHomePage} = require('./routes/index');

//api
app.get('/', getHomePage)

//Template
app.set('view engine', 'ejs');

// Express Static
app.use(express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`lancer sur le port ${port}`);
    
});