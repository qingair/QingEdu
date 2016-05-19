'use strict';

// user-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const user = sequelize.define('users', {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name:{
      type:Sequelize.STRING
    },
    nikename:{
      type:Sequelize.STRING
    },
    avatar:{
      type:Sequelize.STRING
    },
    type: {
      type:   Sequelize.ENUM,
      values: ['teacher', 'student']
    },
    roles: {
      type:   Sequelize.ENUM,
      values: ['user', 'admin']
    },


  }, {
    freezeTableName: true
    //关联location
    //关联tag
  });

  user.sync({fouce:true});

  return user;
};
