const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Today was the best ever!.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: 'What are you guys doing for the Aniverse?',
    user_id: 2,
    post_id: 8
  },
  {
    comment_text: 'I want to beat up Vegeta',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Deku is a punk!',
    user_id: 3,
    post_id: 15
  },
  {
    comment_text: 'Sailer moon I love you!',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'My mom says the Aniverse is not real',
    user_id: 1,
    post_id: 7
  },
  {
    comment_text: 'This is ridiculous',
    user_id: 4,
    post_id: 7
  },
  {
    comment_text: 'Im commenting to be annoying',
    user_id: 1,
    post_id: 4
  },
  {
    comment_text: 'fun times!',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'what is it going to be?',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'cool brb',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'well what do you want?',
    user_id: 4,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
