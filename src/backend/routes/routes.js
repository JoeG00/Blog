const { Router } = require('express');
const router= Router();

const writer=require('../controllers/articlecontroller');

router.route('/')
  .get(writer.getArticles)

router.route('/:id')
    .get(writer.getArticle)
router.route('/createpost')
    .post(writer.createPost)

module.exports = router;
