const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Ethan',
    email: 'ethan@gmail.com',
    password: 'password',
    persona: 'shoto',
    filename: 'shoto.png'
  },
  {
    username: 'Jaime',
    email: 'jaime@gmail.com',
    password: 'password',
    persona: 'goku',
    filename: 'goku.png'
  },
  {
    username: 'Kiersten',
    email: 'kiersten@gmail.com',
    password: 'password',
    persona: 'sailer moon',
    filename: 'SailorMoon.png'
  },
  {
    username: 'David',
    email: 'david@gmail.com',
    password: 'password',
    persona: 'deku',
    filename: 'deku.png'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
