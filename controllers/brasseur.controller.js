const fs = require('fs');

exports.addBrasseurPage = (req, res) =>{

    
    let query = "SELECT nameBrass FROM `brewersfrench` ORDER BY brewer_id ASC";

    db.query(query, (err, result) =>{
        if(err) {
                    res.redirect('/');
                }
                res.render('admin/dashboard', {
                    title: 'affiche nom brasseur',
                    brewersfrench: result
                    
                })
        
    })
}