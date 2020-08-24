const express = require('express')
,     fileUpload = require('express-fileupload')
,     path = require('path')
,     viewsPath = path.join(__dirname, '/views') 
,     session = require('express-session')
,     mysql = require('mysql')
,     dotenv = require ('dotenv')
,     app = express()
,     util = require('util')

const  port = 1998


//fonctionnement environnement
app.set('port', process.env.port || port);
app.set('views', viewsPath);
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

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

//Declaration méthode async await
const queryAsync = util.promisify(db.query).bind(db);
global.queryAsync = queryAsync

//express-session
app.use(session({
    secret: 'beerbeerbeer!',
    resave: false,
    saveUninitialized: true,
    name: 'pasteis',
    cookie: { maxAge: 60000 }
  }));
  
// Controller
const homeRoutes = require('./routes/accueil');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const brasseursRoutes = require('./routes/brasseurs')
const auth = require("./middleware/auth.middleware");

// Dashboard
app.use('/admin',  adminRoutes);
// Authentification 
app.use('/auth',  authRoutes);
//page index
app.use('/',   homeRoutes);
// affiche page brasseurs
app.use('/brasseurs', brasseursRoutes)
//affiche page gallery
app.get('/gallery',(req, res) =>{
    res.render('gallery')
})

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