'use strict';

// articles-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const articles = sequelize.define('articles', {
    text: {
      type: Sequelize.STRING,
      allowNull: false
    }

  }, {
    freezeTableName: true
  });

  articles.sync();

  return articles;
};
