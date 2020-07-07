const router = require('express').Router();
const adminController = require('../controllers/admin.controller');

router.get('/dashboard', adminController.getAdminPage);

module.exports = router;
