module.exports = (req, res, next) => {

    const query = "SELECT user_id, email, password, role_id FROM `users` WHERE user_id = '" + req.session.user_id  + "' ";
    db.query(query, (err, result) => {
  console.log(" auth : ", result);
        if (err) {
            res.send(err);
        }
        if (result == 0) {
          res.redirect('/auth/login')
         
        }
        next()
    });
  
  
  }