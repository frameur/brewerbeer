// const fs = require('fs');

//affiche les brasseurs
exports.listBrasseurPage = async (req, res) => {

    try {

        const listbrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC LIMIT 50")
        const totalBrewers = await queryAsync("SELECT COUNT(*) AS count FROM brewersfrench")
        
        res.render('admin/brasseurs', {

            title: "liste des brasseurs",
            brewersfrench: listbrewer,
            totalBrewers: totalBrewers[0].count

        })
    
    } catch (err) {
        console.log(err.message);
    }


}
//affichage page ajouter un brasseur
exports.addBrasseurPage = (req, res) => {

    res.render('admin/brasseuradd')

}

//Ajouter un brasseur
exports.addBrasseur = async (req, res) => {

    try {
        let brewerId = req.params.id;
        
        let {brewer_id, nameBrass, address, nameCp, nameTown, nameWeb, nameFacebook, email, phone, logo, content, listBeer, created_at} = req.body;

        const breweradd = await queryAsync("INSERT INTO `brewersfrench`(brewer_id, nameBrass, address, nameCp, nameTown, nameWeb, nameFacebook, email, phone, logo, content, listBeer, created_at) VALUES ('" + brewer_id + "', '" + nameBrass + "', '" + address + "', '" + nameCp + "', '" + nameTown + "', '" + nameWeb + "', '" + nameFacebook + +"', '" + email + "', '" + phone + "', '" + logo + "', '" + content + "', '" + listBeer + "', '" + created_at + "')")

        const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerId + "' ")

        
        res.render('admin/brasseurone', {
            
            title: "Ajouter un brasseur",
            message:'fiche brasseur ajouté',
            breweradd: breweradd,
            brewerone: fichebrewer[0]
        });
        
    } catch (err) {
        console.log(err.message);
    }
}

//affiche la page un brasseur
exports.singleBrasseurPage = async (req, res) => {

    try {

        let brewerId = req.params.id;

        const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerId + "' ")

        res.render('admin/brasseurone', {
            
            title: "fiche brasseur",
            brewerone: fichebrewer[0]
        })
    } catch (err) {
        console.log(err.message);
    }

}
//affiche la page modifier une fiche brasseur
exports.editBrasseurPage = async (req, res) => {

    try {

        let brewerId = req.params.id;

        const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerId + "' ")
        
            res.render('admin/brasseuredit', { 
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

        await queryAsync("UPDATE brewersfrench SET nameBrass=?, address=?, nameCp=?, nameTown=?, nameWeb=?, nameFacebook=?, email=?, phone=?, logo=?, content=?, listbeer=?, created_at=? WHERE `brewersfrench`.`brewer_id`=?",   [nameBrass, address,
        nameCp, nameTown, nameWeb, nameFacebook , email, phone, logo, content, listBeer, created_at, brewerId ])

        const fichebrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` WHERE brewer_id = '" + brewerId + "' ")

         
     res.render('admin/brasseurone', {
            title:'fiche brasseur modifier',
            brewerone: fichebrewer[0]
           

            
        });

    } catch (err) {
        console.log(err.message);
    }
}
//supprimer un fichier brasseur
exports.deleteBrasseur = async (req, res) => {
    
    try{ 
        let brewerId = req.params.id;

     await queryAsync('DELETE FROM brewersfrench WHERE brewer_id = "' + brewerId + '"')
     
     const listbrewer = await queryAsync("SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC LIMIT 50")
     
     const totalBrewers = await queryAsync("SELECT COUNT(*) AS count FROM brewersfrench")
     
        
     res.render('admin/brasseurs', {

            message: 'fiche brasseur supprimer',
            brewersfrench: listbrewer,
            totalBrewers: totalBrewers[0].count
            
        });

    }catch (err) {
        console.log(err.message);
    }

}