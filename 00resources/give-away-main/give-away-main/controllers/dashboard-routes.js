const router = require("express").Router();
const sequelize = require("../config/connection");
const { Item, User } = require("../models");

router.get("/", (req, res) => {
  console.log("Hello");
  Item.findAll({
    where: {
      user_id: req.session.user_id,
    },
    include: {
      model: User,
      attributes: ["id", "username", "profile_pic", "profile_desc"],
    },
  })
    .then((itemData) => {
      const items = itemData.map((item) => item.get({ plain: true }));
      res.render("dashboard", { items, loggedIn: true });
      console.log(items);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/profile", (req, res) => {
  User.findOne({
    where: {
      id: req.session.user_id,
    },
    include: [
      {
        model: Item,
        attributes: ["id", "name", "url", "item_text"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((userData) => {
      if (!userData) {
        res.status(404);
        return;
      }
      const user = userData.get({ plain: true });
      res.render("profile", { user, loggedIn: true });
      console.log(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
