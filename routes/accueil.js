const router = require("express").Router();
const homeController = require('../controllers/accueil.controller');

router.get('/', homeController.getAccueil);

module.exports = router;
