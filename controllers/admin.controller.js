exports.getAdminPage = (req, res) => {
  let query = [
      // "SELECT * FROM brewersfrench ORDER BY brewer_id ASC",
      "SELECT `user_id`, `firstname`, `lastname`, `email`, `age`, `password`, `role_id` FROM users ORDER BY firstname ASC",
      "SELECT COUNT(*) AS count FROM users"
    ]
  
  db.query(query.join(';'), (err, result) => {
     
      if (err) {
          res.redirect('/');
      }
      console.log("result :", result[1][0].count)
    
      
      res.render('admin/dashboard', {
        
          title: "Bienvenue",
          users: result[0],
          totalUsers: result[1][0].count,
          firstname: req.session.firstname,
          breadcrumb: "Tableau de bord"
          

      });
  });
   }
