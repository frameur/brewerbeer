//affiche nom des départements
exports.getBrasseur = async (req, res) => {

    const listdepartement = await queryAsync("SELECT `departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase`, `departement_slug`, `departement_nom_soundex` FROM `departement`  ORDER BY departement_id ")

    
    res.render('brasseurs.ejs', {

        title: "liste des departements",
        departement: listdepartement,
       

    });

}

exports.getBrasseurAPI = async (req, res) => {
    const listdepartement = await queryAsync("SELECT `departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase`, `departement_slug`, `departement_nom_soundex` FROM `departement`  ORDER BY departement_id ")

    res.json(listdepartement)

}

// exports.getListBrasseur = async (req, res) => {

//     try {

//         const listbrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC LIMIT 25")
        
       
//         res.render('brasseurs.ejs', {

//             title: "liste des brasseurs",
//             brewersfrench: listbrewer,
           
            
//         })
    
//     } catch (err) {
//         console.log(err.message);
//     }


// }
// //affiche la page un brasseur
// exports.getSingleBrasseur = async (req, res) => {

//     try {

//         let brewerId = req.params.id;

//         const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerId + "' ")

//         res.render('brasseurs.ejs', {
            
//             title: "fiche brasseur",
//             brewerone: fichebrewer[0]
//         })
//     } catch (err) {
//         console.log(err.message);
//     }
