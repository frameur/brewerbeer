//affiche accueil
exports.getAccueilPage = async (req, res) => {
  res.render('admin/accueil')
}

//affiche les utilisateurs
exports.getUsersPage = async (req, res) => {
  const listmembers = await queryAsync(
    'SELECT `user_id`, `firstname`, `lastname`, `email`, `age`, `password`, `role_id` FROM users ORDER BY firstname ASC LIMIT 10'
  )

  const totalUsers = await queryAsync('SELECT COUNT(*) AS count FROM users')

  res.render('admin/users', {
    title: 'liste des membres',
    users: listmembers,
    totalUsers: totalUsers[0].count,
    firstname: req.session.firstname,
    breadcrumb: 'Tableau de bord',
  })
}

// administration des brasseurs

//affiche les brasseurs
exports.getListBrasseur = async (req, res) => {
  try {
    const listbrewer = await queryAsync(
      "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameDepartement`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`,  DATE_FORMAT(created_at, '%d/%m/%Y ') AS created_at FROM `brewersfrench` ORDER BY brewer_id asc LIMIT 25"
    )

    const totalBrewers = await queryAsync(
      'SELECT COUNT(*) AS count FROM brewersfrench'
    )

    res.render('admin/brasseurs', {
      title: 'liste des brasseurs',
      brewersfrench: listbrewer,
      totalBrewers: totalBrewers[0].count,
    })
  } catch (err) {
    console.log(err.message)
  }
}
//affiche page ajouter un brasseur
exports.getAddBrasseur = async (req, res) => {
  res.render('admin/brasseuradd', {
    title: 'Ajouter un brasseur',
  })
}

//Ajouter un brasseur
exports.postAddBrasseur = async (req, res) => {
  try {
    let {
      brewer_id,
      nameBrass,
      address,
      nameCp,
      nameTown,
      nameWeb,
      nameFacebook,
      email,
      phone,
      logo,
      content,
      listBeer,
      nameDepartement,
      created_at,
    } = req.body

    const breweradd = await queryAsync(
      "INSERT INTO `brewersfrench`( brewer_id, nameBrass, address, nameCp, nameTown, nameWeb, nameFacebook, email, phone, logo, content, listBeer, nameDepartement, created_at) VALUES ( '" +
        brewer_id +
        "', '" +
        nameBrass +
        "', '" +
        address +
        "', '" +
        nameCp +
        "', '" +
        nameTown +
        "', '" +
        nameDepartement +
        "', '" +
        nameWeb +
        "', '" +
        nameFacebook +
        "', '" +
        email +
        "', '" +
        phone +
        "',  '" +
        logo +
        "', '" +
        content +
        "', '" +
        listBeer +
        "', '" +
        created_at +
        "')"
    )

    console.log('result: ', breweradd)
    res.render('admin/brasseuradd', {
      title: 'Ajout fiche brasseur',
      message: 'fiche brasseur ajouté',
      breweradd: breweradd,
    })
  } catch (err) {
    console.log(err.message)
  }
}

//affiche la page un brasseur
exports.getSingleBrasseur = async (req, res) => {
  try {
    let brewerId = req.params.id

    const fichebrewer = await queryAsync(
      "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`,`nameDepartement`, DATE_FORMAT(created_at, '%d/%m/%Y ') AS created_at FROM `brewersfrench` WHERE brewer_id = '" +
        brewerId +
        "' "
    )

    res.render('admin/brasseurone', {
      title: 'fiche brasseur',
      brewerone: fichebrewer[0],
    })
  } catch (err) {
    console.log(err.message)
  }
}
//affiche la page modifier une fiche brasseur
exports.getEditBrasseur = async (req, res) => {
  try {
    let brewerId = req.params.id

    const fichebrewer = await queryAsync(
      "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`,`nameDepartement`,  `created_at` FROM `brewersfrench` WHERE brewer_id = '" +
        brewerId +
        "' "
    )

    res.render('admin/brasseuredit', {
      title: 'fiche brasseur',
      brewerone: fichebrewer[0],
    })
  } catch (err) {
    console.log(err.message)
  }
}
//modifier une fiche brasseur
exports.postEditBrasseur = async (req, res) => {
  try {
    let brewerId = req.params.id

    let {
      nameBrass,
      address,
      nameCp,
      nameTown,
      nameWeb,
      nameFacebook,
      email,
      phone,
      logo,
      content,
      listBeer,
      nameDepartement,
      created_at,
    } = req.body

    await queryAsync(
      'UPDATE brewersfrench SET nameBrass=?, address=?, nameCp=?, nameTown=?, nameWeb=?, nameFacebook=?, email=?, phone=?, logo=?, content=?, listbeer=?, nameDepartement=?, created_at=? WHERE `brewersfrench`.`brewer_id`=?',
      [
        nameBrass,
        address,
        nameCp,
        nameTown,
        nameWeb,
        nameFacebook,
        email,
        phone,
        logo,
        content,
        listBeer,
        nameDepartement,
        created_at,
        brewerId,
      ]
    )

    const fichebrewer = await queryAsync(
      "SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`, `nameDepartement`, DATE_FORMAT(created_at, '%d/%m/%Y ') AS created_at FROM `brewersfrench` WHERE brewer_id = '" +
        brewerId +
        "' "
    )

    console.log('result :', fichebrewer)
    res.render('admin/brasseurone', {
      title: 'fiche brasseur modifier',
      brewerone: fichebrewer[0],
    })
  } catch (err) {
    console.log(err.message)
  }
}
//supprimer un fichier brasseur
exports.getDeleteBrasseur = async (req, res) => {
  try {
    let brewerId = req.params.id

    await queryAsync(
      'DELETE FROM brewersfrench WHERE brewer_id = "' + brewerId + '"'
    )

    const listbrewer = await queryAsync(
      'SELECT `brewer_id`, `nameBrass`, `address`, `nameCp`, `nameTown`, `nameWeb`, `nameFacebook`, `email`, `phone`, `logo`, `content`, `listBeer`,`nameDepartement` `created_at` FROM `brewersfrench`'
    )

    const totalBrewers = await queryAsync(
      'SELECT COUNT(*) AS count FROM brewersfrench'
    )
    // console.log("result: ", listbrewer);

    res.render('admin/brasseuradd', {
      message: 'fichier supprimé',
      title: 'fichier supprimé',
      brewersfrench: listbrewer[0],
      totalBrewers: totalBrewers[0].count,
    })
  } catch (err) {
    console.log(err.message)
  }
}
//end administration brasseurs

//affiche page des départements
exports.getDepartement = async (req, res) => {
  const listdepartement = await queryAsync(
    'SELECT `departement_id`, `departement_code`, `departement_nom`, `departement_nom_uppercase`, `departement_slug`, `departement_nom_soundex` FROM `departement`  ORDER BY departement_id ASC LIMIT 25'
  )

  const totalDepartements = await queryAsync(
    'SELECT COUNT(*) AS count FROM departement'
  )

  res.render('admin/departement', {
    title: 'liste des departements',
    departement: listdepartement,
    totalDepartements: totalDepartements[0].count,
  })
}
//end affiche les departements

//Affiche page des villes de France
exports.getVilleFrance = async (req, res) => {
  const listvilles = await queryAsync(
    'SELECT `ville_id`, `ville_departement`, `ville_slug`, `ville_nom`, `ville_nom_simple`, `ville_nom_reel`, `ville_nom_soundex`, `ville_nom_metaphone`, `ville_code_postal`, `ville_commune`, `ville_code_commune`, `ville_arrondissement`, `ville_canton`, `ville_longitude_deg`, `ville_latitude_deg` FROM `villes_france_free` ORDER BY ville_code_postal ASC LIMIT 25'
  )

  const totalVilledefrance = await queryAsync(
    'SELECT COUNT(*) AS count FROM villes_france_free'
  )

  res.render('admin/villefrance', {
    title: 'liste des villes de France',
    villes_france_free: listvilles,
    totalVilledefrance: totalVilledefrance[0].count,
  })
}
//end affiche les villes de France

// affiche page des articles
exports.getArticle = async (req, res) => {
  const listarticles = await queryAsync(
    "SELECT `actu_id`, `actuTitle`, `actuContent`, `author`,`image`, DATE_FORMAT(Date, '%d/%m/%Y') AS Date, DATE_FORMAT(created_at, '%d/%m/%Y') AS created_at FROM `actubeer` ORDER BY actu_id ASC LIMIT 5"
  )

  const totalActubeers = await queryAsync(
    'SELECT COUNT(*) AS count FROM actubeer'
  )

  res.render('admin/articles', {
    title: 'liste des articles',
    actubeer: listarticles,
    totalActubeers: totalActubeers[0].count,
  })
}

//affiche page ajouter un article
exports.getAddArticle = async (req, res) => {
  res.render('admin/articlesadd', {
    title: 'Ajouter un article',
  })
}
//Ajouter un article
exports.postAddArticle = async (req, res) => {
  try {
    let {
      actu_id,
      actuTitle,
      actuContent,
      author,
      image,
      Date,
      created_at,
    } = req.body

    const actuadd = await queryAsync(
      "INSERT INTO `actubeer`( actu_id, actuTitle, actuContent, author, image, Date,  created_at) VALUES ( '" +
        actu_id +
        "', '" +
        actuTitle +
        "', '" +
        actuContent +
        "', '" +
        author +
        "', '" +
        image +
        "', '" +
        Date +
        "', '" +
        created_at +
        "')"
    )

    console.log('result: ', actuadd)

    res.render('admin/articlesadd', {
      title: 'article ajouter',
      acticle: actuadd,
    })
  } catch (err) {
    console.log(err.message)
  }
}
//affiche la page modifier une fiche brasseur
exports.getEditArticle = async (req, res) => {
  try {
    let actuId = req.params.id

    const ficheArticle = await queryAsync(
      "SELECT actu_id, actuTitle, actuContent, author, image, Date, created_at FROM actubeer WHERE actu_id = '" +
        actuId +
        "' "
    )

    res.render('admin/articlesedit', {
      title: 'fiche article',
      actuone: ficheArticle[0],
    })
  } catch (err) {
    console.log(err.message)
  }
}

//modifier une fiche brasseur
exports.postEditArticle = async (req, res) => {
  try {
    let actuId = req.params.id

    let { actuTitle, actuContent, author, image, Date, created_at } = req.body

    await queryAsync(
      'UPDATE `actubeer`SET `actuTitle`=?, `actuContent`=?, `author`=?, `image`=?, `Date`=?, `created_at`=? WHERE `actubeer`.`actu_id`=?',
      [actuTitle, actuContent, author, image, Date, created_at, actuId]
    )

    const ficheArticle = await queryAsync(
      "SELECT `actu_id`, `actuTitle`, `actuContent`, `author`, `image`, `Date`, `created_at` FROM `actubeer` WHERE actu_id = '" +
        actuId +
        "' "
    )

    console.log('result :', ficheArticle)
    res.render('admin/articlesadd', {
      title: 'fiche article modifier',
      articleone: ficheArticle[0],
    })
  } catch (err) {
    console.log(err.message)
  }
}

//supprimer un article
exports.getDeleteArticle = async (req, res) => {
  try {
    let actuId = req.params.id

    await queryAsync('DELETE FROM actubeer WHERE actu_id = "' + actuId + '"')

    const listarticles = await queryAsync(
      'SELECT actu_id, actuTitle, actuContent, author, image, Date,  created_at FROM actubeer'
    )

    const totalActubeers = await queryAsync(
      'SELECT COUNT(*) AS count FROM actubeer'
    )
    console.log('result: ', totalActubeers)

    res.render('admin/articlesadd', {
      message: 'fichier supprimé',
      title: 'fichier supprimé',
      actubeer: listarticles[0],
      totalActubeers: totalActubeers[0].count,
    })
  } catch (err) {
    console.log(err.message)
  }
}
//end gestion des articles
