'use strict';

// articles-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const articles = sequelize.define('articles', {
    description: Sequelize.TEXT,
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }

  }, {
    freezeTableName: true
  });
  articles.sync();
  //articles.sync({force: true});

  return articles;
};
