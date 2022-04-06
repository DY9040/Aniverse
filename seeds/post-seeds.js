const { Post } = require('../models');

const postdata = [
  {
    title: 'Can you see me?',
    
    user_id: 1
  },
  {
    title: 'What a wonderful day in the Aniverse',
    
    user_id: 2
  },
  {
    title: 'My money is on Vegeta honestly. He is rutheless!',
    
    user_id: 3
  },
  {
    title: 'Will you make it out alive?',
    
    user_id: 4
  },
  {
    title: 'HAHAHAHA SO FREAKING FUNNY!',
   
    user_id: 1
  },
  {
    title: 'Can you please turn around?',
   
    user_id: 2
  },
  {
    title: 'Im so happy the Aniverse is here.',
  
    user_id: 3
  },
  {
    title: 'Some days I just dont know...',
 
    user_id: 4
  },
  {
    title: 'Why do i need to wake up guys!?',

    user_id: 1
  },
  {
    title: 'Get to the chopper!',

    user_id: 1
  },
  {
    title: 'Follow me if you want to live!',

    user_id: 2
  },
  {
    title: 'Do you think Sailer Moon will marry me?',

    user_id: 3
  },
  {
    title: 'Who would win Allmight or Goku?',

    user_id: 4
  },
  {
    title: 'What is the best food to eat in the Aniverse?',

    user_id: 3
  },
  {
    title: 'I dont ever want to leave the Aniverse',

    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
