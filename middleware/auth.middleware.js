module.exports = (req, res, next) => {

    const query = "SELECT * FROM `users` WHERE user_id = '" + req.session.user_id  + "' ";
    db.query(query, (err, result) => {
  
        if (err) {
            res.send(err);
        }
        if (result == 0) {
          res.redirect('/auth/login')
        }
        next()
    });
  
  
  }