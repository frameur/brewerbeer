const router = require('express').Router();
const brasseurController = require('../controllers/brasseur.controller');



// // Get
router.get('/list', brasseurController.addBrasseurPage);
router.get('/edit/:id', brasseurController.editBrasseurPage);

// // Post
router.post('/add', brasseurController.addBrasseur);
router.post('/edit/:id', brasseurController.editBrasseur);
router.get('/delete/:id', brasseurController.deleteBrasseur);

module.exports = router;