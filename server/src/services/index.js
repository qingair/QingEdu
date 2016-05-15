'use strict';
const lesson = require('./lesson');
const tag = require('./tag');
const article = require('./article');
const category = require('./category');
const comment = require('./comment');
const authentication = require('./authentication');
const user = require('./user');
const Sequelize = require('sequelize');
module.exports = function() {
  const app = this;

  const sequelize = new Sequelize(app.get('mysql'), {
    dialect: 'mysql',
    logging: false
  });
  app.set('sequelize', sequelize);

  app.configure(authentication);
  app.configure(comment);
  app.configure(category);
  app.configure(article);
  app.configure(tag);
  app.configure(lesson);
  app.configure(user);

  Object.keys(sequelize.models)
    .map(name => sequelize.models[name])
    .filter(model => model.associate !== undefined)
    .forEach(model => model.associate());

  sequelize.sync();
};
