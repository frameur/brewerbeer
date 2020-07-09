const router = require('express').Router();
const villeFranceController = require('../controllers/villefrance.controller');

router.get('/villefrance', villeFranceController.getVilleFrancePage);



module.exports = router;