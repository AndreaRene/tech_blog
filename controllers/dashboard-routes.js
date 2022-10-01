const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// GET all posts by user id
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { "user_id": req.session.user_id },
      include: [User]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('dashboard', {
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// GET new-post page
router.get('/new', withAuth, (req, res) => {
  res.render('dashboard', {
  });
});

// GET edit post page
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      res.render('dashboard', {
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
