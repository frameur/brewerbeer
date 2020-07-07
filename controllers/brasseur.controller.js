const fs = require('fs');

exports.addBrasseurPage = (req, res) =>{

    
    let query = "SELECT nameBrass FROM `brewersfrench` ORDER BY brewer_id ASC";
    "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC";
    
    db.query(query, (err, result) =>{
        if(err) {
                    res.redirect('/');
                }
                res.render('admin/brasseurs', {
                    title: 'affiche nom brasseur',
                    brewersfrench: result[0],
                    totalBrewers: result[0].count,
                    nameBrass: req.session.nameBrass,
                    breadcrumb: "Tableau de bord"
                    
                })
        
    })
}