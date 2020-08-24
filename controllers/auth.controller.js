const bcrypt = require("bcrypt");


// affichage page login et register
exports.loginPage = (req, res) => {
  res.render('auth/login', {
    title: "Page de connexion",
  });
};

exports.registerPage = (req, res) => {
  res.render('auth/register', {
    title: "S'inscrire",
  });
};

// Register
exports.register = (req, res) => {

  let {
    firstname,
    lastname,
    email,
    age,
    password,
    passwordConfirm
  } = req.body;

  let datasql = "SELECT * FROM `users` WHERE email = '" + email + "'";

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
            message: 'formulaire mal rempli'
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

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {

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

          db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, result[0].password], function (err, result) {

            if (result.length) {
              req.session.loggedin = true;
              req.session.firstname = result[0].firstname;
              req.session.user_id = result[0].id;
              req.session.role = result[0].role;
              res.redirect('/');


            } else {
              res.send('Email ou mot de passe incorrect !');
            }
          });
        } else {
          console.log("result :", result);
          console.log(req.session.role_id);
          
          res.render('brasseurs');
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