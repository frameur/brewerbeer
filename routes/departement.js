const router = require('express').Router();
const departementController = require('../controllers/departement.controller');

router.get('/departement', departementController.getDepartementPage);



module.exports = router;