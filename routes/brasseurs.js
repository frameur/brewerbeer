const router = require('express').Router();
const brasseursController = require('../controllers/brasseurs.controller')


router.get('/brasseurs', brasseursController.getBrasseur)
router.get('/departements-api', brasseursController.getDepartementAPI)
router.get('/brasseurs-api', brasseursController.getBrasseursAPI)




module.exports = router;