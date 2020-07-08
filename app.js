const express = require('express')
,     fileUpload = require('express-fileupload')
,     path = require('path')
,     session = require('express-session')
,     mysql = require('mysql')
,     dotenv = require ('dotenv')
,     port = 1998
,     app = express()


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

app.set('port', process.env.port || port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());



//express-session
app.use(session({
    secret: 'beerbeerbeer!',
    resave: false,
    saveUninitialized: true,
    name: 'pasteis_de_nata',
    cookie: { maxAge: 60000 }
  }));
  

// Controller
const brassRoutes = require('./routes/brasseur');
const departementRoutes = require('./routes/departement');
const villesDeFranceRoutes = require('./routes/villefrance');
const articleRoutes = require('./routes/article');
const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const auth = require("./middleware/auth.middleware");

// Admin
app.use('/admin', adminRoutes);
app.use('/brass',  brassRoutes);
app.use('/depart', departementRoutes);
app.use('/townfrench', villesDeFranceRoutes)

app.use('/actu', articleRoutes);
// Authentification 
app.use('/auth',  authRoutes);
// Routes
app.use('/', homeRoutes);
//Page erreur
app.get('*', function(req, res){
  res.status(404);
  res.render('404.ejs', {
      title: "Cette page n'existe pas.",
      
  });
});

app.listen(port, () => {
    console.log(`lancé sur le port ${port}`);
});