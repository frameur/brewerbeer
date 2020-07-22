
exports.getAccueil = async(req, res) => {
    const userId = req.session.user_id
    
    const listarticles = await queryAsync("SELECT `actu_id`, `actuTitle`, `actuContent`, `author`,`image`, DATE_FORMAT(Date, '%d/%m/%Y') AS Date, DATE_FORMAT(created_at, '%d/%m/%Y') AS created_at FROM `actubeer`")
    
    res.render('index.ejs',{
        title:'Bonjour !',
        userId,
        actubeer: listarticles,
    })
}
