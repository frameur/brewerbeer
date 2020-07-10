exports.getDepartementPage = async (req, res) => {

    const listdepartement = await queryAsync("SELECT `departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase`, `departement_slug`, `departement_nom_soundex` FROM `departement`  ORDER BY departement_id ASC LIMIT 25")

    const totalDepartements = await queryAsync("SELECT COUNT(*) AS count FROM departement")


    res.render('admin/departement', {


        title: "liste des departements",
        departement: listdepartement,
        totalDepartements: totalDepartements[0].count


    });

}