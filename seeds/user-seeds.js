const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'LakynFelix',
    email: 'lakynmphotography@hotmail.com',
    password: 'Lakyn123'
  },
  {
    username: 'Sam Simpson',
    email: 'SamSimpson@hotmail.com',
    password: 'Sam123'
  },
  {
    username: 'Anthony Doniewski',
    email: 'AnthonyDoniewski@gmail.com',
    password: 'Anthony123'
  },
  {
    username: 'Adam Testa',
    email: 'Adam@fmail.com',
    password: 'Adam123'
  },
  {
    username: 'Andra Wing',
    email: 'Andra@gmail.com',
    password: 'Andra123'
  },
  {
    username: 'Amanda Munroe',
    email: 'Amandam@hotmail.com',
    password: 'Amanda123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
