exports.addArticlePage = (req, res) => {
    let query = [
        "SELECT `actu_id`, `actuTitle`, `actuContent`, `Date`, `created_at` FROM `actubeer` ORDER BY actu_id ASC LIMIT 10",
        "SELECT COUNT(*) AS count FROM actubeer"
      ]
    
    db.query(query.join(';'), (err, result) => {
       
        if (err) {
            res.redirect('/admin/dashboard');
        }
        console.log("result :", result[1][0].count)
      
        
        res.render('admin/articles', {
          
            
           title: "liste des articles",
           actubeer: result,
           totalActubeers: result[1][0].count
            
  
        });
    });
     }
  





