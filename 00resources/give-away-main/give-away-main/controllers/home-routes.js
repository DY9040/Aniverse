const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Item, Comment} = require('../models')


router.get('/', (req,res)=>{
    console.log(req.session)
    Item.findAll({
        include:{
            model: User,
            attributes:['username']
        }
    })
    .then(itemData =>{
        console.log(itemData)
        const items = itemData.map(item=> item.get({plain: true}))
        res.render('homepage', {
            items,
            loggedIn: req.session.loggedIn
        })
    })
    .catch(err=>{
    console.log(err)
    })
})


router.get('/login',(req,res)=>{
    if(req.session.loggedIn){
        res.redirect('/');
        return
    }
    
    res.render('login')
})



router.get('/logout',(req,res)=>{
    if(req.session.loggedIn){
     req.session.destroy(()=>{
         res.status(204).end()
     });
    }else{
        res.status(404).end
    }
})

// router.get('/login', (req, res) => {
//     res.render('login');
// })
router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/items/:id', (req, res) => {
    Item.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'name',
        'url',
        'item_text',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: [  
            'id',
          'context',
          'item_id',
          'created_at',],
          include: {
            model: User,
            attributes: ['username' ,'profile_pic','profile_desc']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbItemData => {
        if (!dbItemData) {
          res.status(404).json({ message: 'No item found with this id' });
          return;
        }
  
        const item = dbItemData.get({ plain: true });
  
        res.render('single-item', {
          item,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;