const bcrypt = require("bcrypt");


// affichage page login et register
exports.loginPage = async (req, res) => {
  res.render('auth/login', {
    title: "Page de connexion",
  });
};

exports.registerPage = async (req, res) => {
  res.render('auth/register', {
    title: "S'inscrire",
  });
};

// Register
exports.register =  (req, res) => {

  let {
    firstname,
    lastname,
    email,
    age,
    password,
    passwordConfirm
  } = req.body;

  let datasql = "SELECT firstname, lastname, email, age, password FROM `users` WHERE email = '" + email + "'";

  db.query(datasql, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.length > 0) {
      message = "Le compte existe déjà";
      res.redirect("auth/register", {
        message,
        title: "Ajouter un utilisateur",
      });

    } else if (password !== passwordConfirm) {
      return res.render('register', {
        message: 'Password different'
      });
    } else {

      bcrypt.hash(password, 10, function (err, hash) {

        let query = "INSERT INTO `users` (firstname, lastname, email, password, age, role_id) VALUES ('" + firstname + "', '" + lastname + "', '" + email + "', '" + hash + "', '" + age + "', '" + 2 + "')";

        db.query(query, (err, result) => {
          if (err) {
            return res.status(500).send(err);
           
          } else {
            res.redirect("/auth/login");
          }

        });
      });
    }
  })
}


// Login
exports.login = (req, res) => {

  const {
    email,
    password
  } = req.body

   db.query ('SELECT email, password FROM users WHERE email = ?', [email], (err, result) => {

    if (err || result.length === 0) {


      return res.status(401).json({
        error: `Vous n'êtes pas inscrit`
      });
    } else {

     bcrypt.compare(password, result[0].password, (err, success) => {
        if (err) {
          return res.status(401).json({
            error: `Bcrypt Auth failed`
            
          });
          
        }
        if (success) {

          db.query('SELECT user_id, email, password, role_id FROM users WHERE email = ? AND password = ?', [email, result[0].password], function (err, result) {

            if (results.length) {
              req.session.loggedin = true;
              req.session.firstname = result[0].firstname;
              req.session.user_id = result[0].id;
              req.session.role_id = result[0].role;
              
              if(result[0].role === 1){
                res.redirect('/admin/accueil')
              }else{
                res.redirect('/');
              }
              // console.log("req.session :", req.session);
            } else {
              res.send('Email ou mot de passe incorrect !');
            }
          });
        } else {
          
          console.log('results:', result);
          // console.log(req.session.role_id);
          console.log('req.session :', req.session);
          
          
          return res.redirect('/');
        }

      });
    }
  });
};

//deconnection

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/auth/login');
    }
  });


};