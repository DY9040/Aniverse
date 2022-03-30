const router = require('express').Router();
const { Comment, User } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({
            // attributes: ['id', 'post_url', 'title', 'created_at',[sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']],
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

router.post('/', (req, res) => {
    //{"comment_text": "req.body.comment_text", "user_id": "req.body.user_id","post_id": "req.body.post_id"}
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.post_id
      })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
          console.log(err);
          res.status(400).json(err);
        });

});

router.delete('/:id', (req, res) => {
    
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
