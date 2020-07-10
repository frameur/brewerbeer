exports.getDepartementPage = (req, res) => {
    let query = [
        "SELECT `departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase`, `departement_slug`, `departement_nom_soundex` FROM `departement`  ORDER BY departement_id ASC LIMIT 25",
        "SELECT COUNT(*) AS count FROM departement"
      ]
    
    db.query(query.join(';'), (err, result) => {
       
        if (err) {
            res.redirect('/admin/dashboard');
        }
        console.log("result :", result[1][0].count)
      
        
        res.render('admin/departement', {
          
            
           title: "liste des departements",
           departement: result,
           totalDepartements: result[1][0].count
            
  
        });
    });
     }
  





