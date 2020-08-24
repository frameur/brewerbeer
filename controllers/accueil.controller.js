
exports.getAccueil = async(req, res) => {
    const userId = req.session.user_id
    
    const listarticles = await queryAsync("SELECT `actu_id`, `actuTitle`, `actuContent`, `author`,`image`, DATE_FORMAT(Date, '%d/%m/%Y') AS Date, DATE_FORMAT(created_at, '%d/%m/%Y') AS created_at FROM `actubeer`")

    // const listdepartement = await queryAsync("SELECT departement_nom_uppercase FROM departement WHERE departement_code LIKE '85%' ")
    // const listbrewer = await queryAsync("SELECT brewer_id, nameBrass, address FROM brewersfrench WHERE nameCp LIKE '85%'")
    
    res.render('index.ejs',{
        title:'Bonjour !',
        userId,
        actubeer: listarticles
        // brewersfrench: listbrewer,
        // departement:listdepartement

    })
}
