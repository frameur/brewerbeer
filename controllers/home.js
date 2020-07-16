exports.getHomePage = (req, res) => {
    const userId = req.session.id
    
    res.render('index.ejs',{
        title:'Bonjour !',
        userId
    })
}