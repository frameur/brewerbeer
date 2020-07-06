const express = require('express')
,     fileUpload = require('express-fileupload')
,     path = require('path')
,     session = require('express-session')
,     mysql = require('mysql')
,     dotenv = require ('dotenv')
,     port = 1998
,     app = express()

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
//Template
app.set('view engine', 'ejs');

// Express Static pour affichage fichier css img
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

dotenv.config({path: './.env'})

//express-session
app.use(session({
    secret: 'beerbeerbeer!',
    resave: false,
    saveUninitialized: true,
    name: 'pasteis_de_nata',
    cookie: { maxAge: 60000 }
  }));
  
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


// Controller
const {getHomePage} = require('./routes/home');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const auth = require("./middleware/auth.middleware");
// const brassRoutes = require('./routes/brasseur');
const { getAdminPage } = require('./controllers/admin.controller');

// Admin
app.use('/admin', auth, adminRoutes);

// Authentification 
app.use('/auth',  authRoutes);
// app.use('/brasseur', brassRoutes);

// Routes
app.get('/', getHomePage);
app.get('/admin', getAdminPage);
app.get('/gallery', (req, res) =>{
    res.render('gallery.ejs')
})
app.get('/brasseurs', (req, res) =>{
    res.render('brasseurs.ejs')
})


//Page erreur
app.get('*', function(req, res, next){
  res.status(404);
  res.render('404.ejs', {
      title: "Cette page n'existe pas.",
  });
});



app.listen(port, () => {
    console.log(`lancé sur le port ${port}`);
});