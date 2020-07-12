const fs = require('fs');
//affiche les brasseurs
exports.addBrasseurPage = async (req, res) => {
    
    const listbrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC LIMIT 25")
    const totalBrewers = await queryAsync ("SELECT COUNT(*) AS count FROM brewersfrench")
    
   
        res.render('admin/brasseurs', {
          
            
           title: "liste des brasseurs",
           brewersfrench: listbrewer,
           totalBrewers: totalBrewers[0].count            
  
        })
    
       }
//affiche un brasseur
exports.editBrasseurPage = async(req, res) =>{

    let brewerid = req.params.id;
    const fichebrewer = await queryAsync ("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerid + "' ")
    console.log("result :", fichebrewer);
        res.render('admin/brasseurone', {
        title: "fiche brasseur",
        brewerone:fichebrewer[0]   
        
    })

}

  





