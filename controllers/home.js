exports.getHomePage = (req, res) => {
    const userId = req.session.user_id
    
    res.render('index.ejs',{
        title:'Bonjour !',
        userId
    })
}