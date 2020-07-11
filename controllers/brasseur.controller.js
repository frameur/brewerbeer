
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

    let brewerid = req.params.brewer_id;
    const fichebrewer = await queryAsync ("SELECT * FROM `brewersfrench` WHERE brewer_id = '" + brewerid + "' ")

        res.render('admin/brasseurone', {
        title: "fiche brasseur",
        brewerone:fichebrewer[0]   
        
    })

}

  





