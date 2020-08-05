const { Router } = require('express');
const router= Router();

const writer=require('../controllers/articlecontroller');

router.route('/')
  .get(writer.getArticles)

router.route('/:id')
    .get(writer.getArticle)
    .delete(writer.delteArticle)
    .put(writer.updateArticle)

router.route('/createpost')
    .post(writer.createPost)

module.exports = router;
