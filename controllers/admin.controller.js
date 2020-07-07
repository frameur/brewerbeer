exports.getAdminPage = (req, res) => {
  let query = [
      // "SELECT * FROM brewersfrench ORDER BY brewer_id ASC",
      "SELECT * FROM users ORDER BY user_id ASC",
      "SELECT COUNT(*) AS count FROM users"
    ]
  
  db.query(query.join(';'), (err, result) => {
     console.log("result :", result)
      if (err) {
          res.redirect('/');
      }

    //  console.log("result[2]: ", result[2]);
      
      res.render('admin/dashboard', {

          title: "Bienvenue",
          brewersfrench: result[0],
          users: result[1],
          totalUsers: result[2][0].count,
          firstname: req.session.firstname,
          breadcrumb: "Tableau de bord"
      });
  });
   }
