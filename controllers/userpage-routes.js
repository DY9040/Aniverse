const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
  console.log("get from userpage-routes.js worked");
  let user;
  console.log('======================');
  User.findByPk(req.session.user_id,{
    attributes: [
      'username',
      'email',
      'password',
      'persona',
      'filename'
    ]
  }).then(dbUserData => {
    user = dbUserData.dataValues;
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_text'
      
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username','persona','filename']
        }
      },
      {
        model: User,
        attributes: ['username','persona','filename']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));

      res.render('user', { user, posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'created_at',
        'post_text'
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username','persona','filename']
          }
        },
        {
          model: User,
          attributes: ['username','persona','filename']
        }
      ]
    })
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render('user', {
            post,
            loggedIn: true
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
