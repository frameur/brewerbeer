const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

//page accueil dashboard
router.get('/dashboard', adminController.getAdminPage);
//page base de données departement
router.get('/departement', adminController.getDepartement); 
//page base de données villede france
router.get('/villefrance', adminController.getVilleFrance);
//page actualites
router.get('/articles', adminController.getArticle);
// router.get('/edit/:id', adminController.getEditArticlePage);
// // Post
// router.post('/article/add', adminController.postAddArticle);
// router.post('/article/edit/:id', adminController.postEditArticle);
// router.post('/article/delete/:id', adminController.postDeleteArticle);

//page administration des brasseurs
// Get
router.get('/brasseurs',adminController.getListBrasseur);
router.get('/brasseurs/edit/:id',adminController.getEditBrasseur);
router.get('/brasseurs/add',adminController.getAddBrasseur);
router.get('/brasseurs/:id',adminController.getSingleBrasseur);
// Post
router.post('/brasseur/add',adminController.postAddBrasseur);
router.post('/brasseur/edit/:id',adminController.postEditBrasseur);
router.post('/brasseur/delete/:id',adminController.postDeleteBrasseur);

module.exports = router;





