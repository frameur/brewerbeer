exports.getVilleFrancePage = async(req, res) => {
    const listvilles = await queryAsync("SELECT `ville_id`, `ville_departement`, `ville_slug`, `ville_nom`, `ville_nom_simple`, `ville_nom_reel`, `ville_nom_soundex`, `ville_nom_metaphone`, `ville_code_postal`, `ville_commune`, `ville_code_commune`, `ville_arrondissement`, `ville_canton`, `ville_longitude_deg`, `ville_latitude_deg` FROM `villes_france_free` ORDER BY ville_id ASC LIMIT 25")
    const totalVilledefrance = await queryAsync ("SELECT COUNT(*) AS count FROM villes_france_free")
      
      
    
        res.render('admin/villefrance', {
                     
           title: "liste des villes de France",
           villes_france_free: listvilles,
           totalVilledefrance: totalVilledefrance[0].count
           
  
        });

     }
  





