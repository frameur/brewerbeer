const router = require('express').Router();
const brasseursController = require('../controllers/brasseurs.controller')

//affiche liste brasseurs et brasseur individuel
router.get('/brasseurs', brasseursController.getBrasseur)

router.get('/brasseurs-api', brasseursController.getBrasseurAPI)






module.exports = router;