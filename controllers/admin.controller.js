exports.getAdminPage = (req, res) => {

 
    // let query = [
        // "SELECT * FROM firstname ORDER BY id ASC",
        // "SELECT * FROM users ORDER BY user_id ASC",
        // "SELECT COUNT(*) AS count FROM users"
      // ]
   
    // db.query(query.join(';'), (err, result) => {
      
    //     if (err) {
    //         res.redirect('/');
    //     }
  
      
        
    //     res.render('/admin/dashboard', {
  
    //         title: "Bienvenue",
    //         brasseurs: result[0],
    //         users: result[1],
    //         totalUsers: result[2][0].count,
    //         firstname: req.session.firstname,
    //         breadcrumb: "Tableau de bord"
    //     });
    // });
    
  
    /*
    npm install async
  
    async.parallel({
   one: function(callback) {
      callback(null, 'abc\n');
   },
   two: function(callback) {
     callback(null, 'xyz\n');
   }
  }, function(err, results) {
    if (error) throw error;
      res.render('test', {
        columnNames: results.one, 
        dataRegistros: results.two      
     });
  });
  */
  
    
  
  };
  