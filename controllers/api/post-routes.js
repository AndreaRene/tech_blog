const router = require('express').Router();
const { Post } = require('../../models/');
const withAuth = require('../../utils/auth');

// POST new blog post
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({
      ...body,
      user_id: req.session.user_id
    });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// PUT update blog post
router.put('/:id', withAuth, async (req, res) => {
  try {
    await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    // if (changes > 0) {
    res.status(200).end();
    // } else {
    // res.status(404).end();
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE blog post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [changes] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (changes > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
