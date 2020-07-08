const router = require('express').Router();
const villeFranceController = require('../controllers/villefrance.controller');

router.get('/departement', villeFranceController.getVilleFrancePage);



module.exports = router;