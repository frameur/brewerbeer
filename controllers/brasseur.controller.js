const fs = require('fs');
//affiche les brasseurs
exports.addBrasseurPage = async (req, res) => {

    const listbrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC LIMIT 25")
    const totalBrewers = await queryAsync("SELECT COUNT(*) AS count FROM brewersfrench")

    console.log("result :", listbrewer);
    res.render('admin/brasseurs', {


        title: "liste des brasseurs",
        brewersfrench: listbrewer,
        totalBrewers: totalBrewers[0].count

    })

}
//Ajouter un brasseur
exports.addBrasseur = async (req, res) => {

    let {
        nameBrass,
        address,
        nameCp,
        nameTown,
        nameWeb,
        nameFacebook,
        email,
        phone,
        logo,
        content,
        listBeer,
        created_at
    } = req.body;
    
 
    const brewerajout = await queryAsync ("INSERT INTO `brewersfrench`(`brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at`) VALUES ('" + brewer_id + "', '" + nameBrass + "', '" + address + "', '" + nameCp + "', '" + nameTown + "', '" + nameWeb + "', '" + nameFacebook + +"', '" + email + "', '" + phone + "', '" + logo + "', '" + content + "', '" + listBeer + "', '" + created_at + "')")

    // message = "Fichier image invalide";
    res.render('admin/brasseuradd', {
        message,
        title: "Ajouter un brasseur",
        breweradd:brewerajout

    });
}

//affiche un brasseur
exports.editBrasseurPage = async (req, res) => {

    let brewerid = req.params.id;

    const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerid + "' ")

    res.render('admin/brasseurone', {
        title: "fiche brasseur",
        brewerone: fichebrewer[0]

    })

}
//modifier une fiche brasseur
exports.editBrasseur = async (req, res) => {
    let brewerId = req.params.id;

    let {
        nameBrass,
        address,
        nameCp,
        nameTown,
        nameWeb,
        nameFacebook,
        email,
        phone,
        logo,
        content,
        listBeer,
        created_at
    } = req.body;


    const brewermodif = await queryAsync("UPDATE `players` SET `nameBrass` = '" + nameBrass + "', `address` = '" + address + "', `nameCp` = '" + nameCp + "', `nameTown` = '" + nameTown + "' , `nameWeb` = '" + nameWeb + "' , `nameFacebook` = '" + nameFacebook + "' , `email` = '" + email + "' , `phone` = '" + phone + "' , `logo` = '" + logo + "' , `content` = '" + content + "' , `listBeer` = '" + listBeer + "' , `created_at` = '" + created_at + "' WHERE `brewersfrench`.`brewer_id` = '" + brewerId + "'");
    
        
        res.redirect('/brass/list', {
            brewermodif:brewermodif
        });

    
}
//supprimer un fichier brasseur
exports.deleteBrasseur = async (req, res) => {
    let brewerId = req.params.id;
    let brewerdelete = await queryAsync ('DELETE FROM brewerfrench WHERE brewer_id = "' + brewerId + '"')
    
 
        res.redirect('/brass/list', {
                    
            message,
            title: 'fiche brasseur supprimer',
            brewerdel:brewerdelete
        });
            
    
}