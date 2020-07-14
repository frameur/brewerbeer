const fs = require('fs');

//affiche les brasseurs
exports.addBrasseurPage = async (req, res) => {

    try {

        const listbrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC LIMIT 50")
        const totalBrewers = await queryAsync("SELECT COUNT(*) AS count FROM brewersfrench")
        // console.log("result :", totalBrewers);
        res.render('admin/brasseurs', {

            title: "liste des brasseurs",
            brewersfrench: listbrewer,
            totalBrewers: totalBrewers[0].count

        })
    
    } catch (err) {
        console.log(err.message);
    }


}
//Ajouter un brasseur
exports.addBrasseur = async (req, res) => {

    try {

        let {nameBrass, address, nameCp, nameTown, nameWeb, nameFacebook, email, phone, logo, content, listBeer, created_at} = req.body;
        
        const brewerajout = await queryAsync("INSERT INTO `brewersfrench`(brewer_id, nameBrass, address, nameCp, nameTown, nameWeb, nameFacebook, email, phone, logo, content, listBeer, created_at) VALUES ('" + nameBrass + "', '" + address + "', '" + nameCp + "', '" + nameTown + "', '" + nameWeb + "', '" + nameFacebook + +"', '" + email + "', '" + phone + "', '" + logo + "', '" + content + "', '" + listBeer + "', '" + created_at + "')")
        
        res.render('admin/brasseuradd', {
            message,
            title: "Ajouter un brasseur",
            breweradd: brewerajout
            
        });
        
    } catch (err) {
        console.log(err.message);
    }
}

//affiche un brasseur
exports.editBrasseurPage = async (req, res) => {

    try {

        let brewerid = req.params.id;

        const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerid + "' ")

        res.render('admin/brasseurone', {
            
            title: "fiche brasseur",
            brewerone: fichebrewer[0]
        })
    } catch (err) {
        console.log(err.message);
    }

}
//modifier une fiche brasseur
exports.editBrasseur = async (req, res) => {

    try {

        let brewerId = req.params.id;

        let {nameBrass, address, nameCp, nameTown, nameWeb, nameFacebook, email, phone, logo, content, listBeer, created_at} = req.body;

        const brewermodif = await queryAsync("UPDATE `brewersfrench` SET `nameBrass` = '" + nameBrass + "', `address` = '" + address + "', `nameCp` = '" + nameCp + "', `nameTown` = '" + nameTown + "' , `nameWeb` = '" + nameWeb + "' , `nameFacebook` = '" + nameFacebook + "' , `email` = '" + email + "' , `phone` = '" + phone + "' , `logo` = '" + logo + "' , `content` = '" + content + "' , `listBeer` = '" + listBeer + "' , `created_at` = '" + created_at + "' WHERE `brewersfrench`.`brewer_id` = '" + brewerId + "'");

        res.redirect('/brass/list', {
            title:'modifier fiche brasseur',
            brewermodif: brewermodif
        });

    } catch (err) {
        console.log(err.message);
    }

}
//supprimer un fichier brasseur
exports.deleteBrasseur = async (req, res) => {

    try{ 
        let brewerId = req.params.id;
        let brewerdelete = await queryAsync('DELETE FROM brewersfrench WHERE brewer_id = "' + brewerId + '"')

        res.redirect('/brass/list', {

            message,
            title: 'fiche brasseur supprimer',
            brewerdel: brewerdelete
        });

    }catch (err) {
        console.log(err.message);
    }

}