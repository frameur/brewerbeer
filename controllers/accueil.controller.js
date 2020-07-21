
exports.getAccueil = async(req, res) => {
    const userId = req.session.user_id
    
    const listarticles = await queryAsync("SELECT `actu_id`, `actuTitle`, `actuContent`, `author`,`image`,`Date`, `created_at` FROM `actubeer`")
    
    res.render('index.ejs',{
        title:'Bonjour !',
        userId,
        actubeer: listarticles,
    })
}
