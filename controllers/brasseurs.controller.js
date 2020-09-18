
//affiche les brasseurs 
exports.getBrasseur = async (req, res) => {
    
    const listbrewer = await queryAsync("SELECT nameBrass, nameTown, nameWeb, nameFacebook FROM brewersfrench WHERE nameCp LIKE '85%' limit 5")
          
    res.render('brasseurs', {
        
        title: "liste des brasseurs",
        
        brewersfrench: listbrewer
        
         
    });
    
}
//data json brasseurs et coordonnées gps
exports.getBrasseursAPI = async (req, res) => {

   
          const listbrewer = await queryAsync ("SELECT nameBrass, nameTown, ville_departement, ville_longitude_deg, ville_latitude_deg FROM `brewersfrench`INNER JOIN villes_france_free ON nameTown = ville_nom  ")
           
        
           res.json({
            data:listbrewer
           })
       
       }
//data json departements      
exports.getDepartementAPI = async (req, res) => {

            const listdepartement = await queryAsync("SELECT `departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase` FROM `departement`  ORDER BY   departement_id ")
            
              
            res.json( listdepartement)
        
        }
//data brasseurs et departement
exports.getBrasseursDepartementAPI = async (req, res) => {

    // const lienbrasseurdepart = await queryAsync("SELECT nameBrass, departement_nom, departement_code FROM `brewersfrench`INNER JOIN departement ON departement_code = nameCode ")
    
    const lienbrasseurdepart = await queryAsync("SELECT `departement_nom`, GROUP_CONCAT(`nameBrass` SEPARATOR ' , ') AS nameBrass FROM `brewersfrench` INNER JOIN `departement` ON `departement_code` = `nameCode` GROUP BY `departement_nom`") 

    res.json(lienbrasseurdepart)
}




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
