exports.getBrasseurPage = (req, res) => {
    let query = [
        "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY brewer_id ASC",
        "SELECT COUNT(*) AS count FROM brewersfrench"
      ]
    
    db.query(query.join(';'), (err, result) => {
       
        if (err) {
            res.redirect('/admin/dashboard');
        }
        console.log("result :", result[1][0].count)
      
        
        res.render('admin/brasseurs', {
          
            
           title: "liste des brasseurs",
           brewersfrench: result,
           totalBrewers: result[1][0].count
            
  
        })
    });
     }
  





// const fs = require('fs')

// exports.addBrasseurPage = (req, res) =>{

    
//     let query = "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `created_at` FROM `brewersfrench` ORDER BY nameBrass ASC";
    
   
     
//     db.query(query, (err, result) =>{
//           console.log("result :", result)
//         if(err) {
//                     res.redirect('/dashboard');
//                 }
//                 res.render('admin/brasseurs', { 
//                     title: 'affiche nom brasseur',
//                     brewers: result [0]
                   
                    
//                 });
        
//     });
// };