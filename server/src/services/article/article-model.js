'use strict';

// article-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const article = sequelize.define('articles', {
    description: Sequelize.TEXT,
    summary: Sequelize.TEXT,
    states: {
      type:   Sequelize.ENUM,
      values: ['publish', 'unpublish', 'deleted']
    },

    thumb: Sequelize.STRING,
    position:Sequelize.INTEGER,
    type:Sequelize.INTEGER,
    title: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    freezeTableName: true
    //关联category categories[]
    //关联tag tags[]
    //关联images images[]
    //关联comments comments[]
    //关联users teacher[]  student[] publisher{}

  });

  article.sync()

  return article;
};
