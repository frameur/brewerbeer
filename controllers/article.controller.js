exports.addArticlePage = async (req, res) => {
    const listarticles = await queryAsync("SELECT `actu_id`, `actuTitle`, `actuContent`, `Date`, `created_at` FROM `actubeer` ORDER BY actu_id ASC LIMIT 10")
        
    const totalActubeers = await queryAsync("SELECT COUNT(*) AS count FROM actubeer")    
      
 
        res.render('admin/articles', {
          
           title: "liste des articles",
           actubeer: listarticles,
           totalActubeers: totalActubeers[0].count
            
  
        });
    
     }
  





