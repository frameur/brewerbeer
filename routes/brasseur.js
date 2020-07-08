const router = require('express').Router();
const brasseurController = require('../controllers/brasseur.controller');

router.get('/brasseurs', brasseurController.getBrasseurPage);

// // Get
// router.get('/add', brasseurController.addBrasseurPage);
// router.get('/edit/:id', brasseurController.editBrasseurPage);

// // Post
// router.post('/add', brasseurController.addBrasseur);
// router.post('/edit/:id', brasseurController.editBrasseur);
// router.get('/delete/:id', brasseurController.deleteBrasseur);

module.exports = router;