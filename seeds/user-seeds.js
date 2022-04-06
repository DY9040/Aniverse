const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Ethan',
    email: 'ethan@gmail.com',
    password: 'password',
    persona: 'Shoto',
    filename: 'shoto.png'
  },
  {
    username: 'Jaime',
    email: 'jaime@gmail.com',
    password: 'password',
    persona: 'Goku',
    filename: 'goku.png'
  },
  {
    username: 'Kiersten',
    email: 'kiersten@gmail.com',
    password: 'password',
    persona: 'Sailor Moon',
    filename: 'SailorMoon.png'
  },
  {
    username: 'David',
    email: 'david@gmail.com',
    password: 'password',
    persona: 'Deku',
    filename: 'deku.png'
  }
  
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
