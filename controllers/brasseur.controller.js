const fs = require('fs');

exports.addBrasseurPage = (err, res) =>{

    if(err){
        res.redirect('/')
    }

    res.render('brasseur.ejs');

    // let query = "SELECT * FROM `brewersfrench` ORDER BY nameBrass ASC";

    // debugger.query(query, (err, result) =>{
        // if(err) {
        //             res.redirect('/');
        //         }
        //         res.render('brasseur.ejs', {
                    
        //         })
    //     
    // })
}