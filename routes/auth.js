const router = require('express').Router();
const authController = require('../controllers/auth.controller');

// Get
router.get('/login', authController.loginPage);
router.get('/register', authController.registerPage);

// Post
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);





module.exports = router;
