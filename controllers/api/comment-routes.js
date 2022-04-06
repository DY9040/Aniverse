const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment, User } = require('../../models');

router.get('/',withAuth, (req, res) => {
    Comment.findAll({
            // attributes: ['id', 'post_url', 'title', 'created_at'],
            order: [['id', 'ASC',]],
            include: [
              {
                model: User,
                attributes: ['username']
              }
            ]
          })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
              console.log(err);
              res.status(500).json(err);
            });

    });


router.post('/',withAuth, (req, res) => {
  // check the session
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbCommentData => res.json(dbCommentData))
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

router.delete('/:id',withAuth, (req, res) => {
    
    Comment.destroy({
        where: {
        id: req.params.id
        }
    })
    .then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' });
            return;
        }
         res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});


module.exports = router;
