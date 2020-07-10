const router = require('express').Router();
const articleController = require('../controllers/article.controller');



// // Get
router.get('/add', articleController.addArticlePage);
// router.get('/edit/:id', articleController.editArticlePage);

// // Post
// router.post('/add', articleController.addArticle);
// router.post('/edit/:id', articleController.editArticle);
// router.get('/delete/:id', articleController.deleteArticle);

module.exports = router;