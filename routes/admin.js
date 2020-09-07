const router = require('express').Router()
const adminController = require('../controllers/admin.controller')

//page administration des brasseurs
// Get
router.get('/brasseurs',adminController.getListBrasseur)
router.get('/brasseurs/edit/:id',adminController.getEditBrasseur)
router.get('/brasseurs/add',adminController.getAddBrasseur)
router.get('/brasseurs/:id',adminController.getSingleBrasseur)
// Post
router.post('/brasseurs/add',adminController.postAddBrasseur)
router.post('/brasseurs/edit/:id',adminController.postEditBrasseur)
router.get('/brasseurs/delete/:id',adminController.getDeleteBrasseur)

//page accueil
router.get('/accueil', adminController.getAccueilPage)
//page utilisateurs
router.get('/users', adminController.getUsersPage)

//page base de données departement
router.get('/departement', adminController.getDepartement)

//page base de données villede france
router.get('/villefrance', adminController.getVilleFrance)

//page actualites
router.get('/articles', adminController.getArticle)
router.get('/articles/add', adminController.getAddArticle)
router.get('/articles/edit/:id', adminController.getEditArticle)
// Post
router.post('/articles/add', adminController.postAddArticle)
router.post('/articles/edit/:id', adminController.postEditArticle)
router.get('/articles/delete/:id', adminController.getDeleteArticle)

module.exports = router;





