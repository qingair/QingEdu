'use strict';

// article-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const article = sequelize.define('articles', {
    description: Sequelize.TEXT,
    states: {
      type:   Sequelize.ENUM,
      values: ['publish', 'unpublish', 'deleted']
    },
    //types: {
    //  type:   Sequelize.ENUM,
    //  values: ['active', 'pending', 'deleted']
    //},
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
  });

  article.sync();
  //article.sync({force:true});

  return article;
};
