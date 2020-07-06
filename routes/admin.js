const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

router.get('/', adminController.getAdminPage);

module.exports = router;
