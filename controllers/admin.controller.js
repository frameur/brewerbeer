exports.getAdminPage = async (req, res) => {

    const listmembers = await queryAsync("SELECT `user_id`, `firstname`, `lastname`, `email`, `age`, `password`, `role_id` FROM users ORDER BY firstname ASC LIMIT 10")

    const totalUsers = await queryAsync("SELECT COUNT(*) AS count FROM users")


    res.render('admin/dashboard', {

        title: "liste des membres",
        users: listmembers,
        totalUsers: totalUsers[0].count,
        firstname: req.session.firstname,
        breadcrumb: "Tableau de bord"


    });

}