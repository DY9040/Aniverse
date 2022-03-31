// import all models
const Post = require('./Post');
const User = require('./User');
// const Vote = require('./Vote');
const Comment=require('./Comment');



// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'user_id'
// });


// commenting this out removes the double post_id error plague
// User.belongsToMany(Post, {
//   through: Comment,
//   as: 'commented_posts',
//   foreignKey: 'post_id'
// });



Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
