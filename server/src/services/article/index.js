'use strict';

const service = require('feathers-sequelize');
const article = require('./article-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: article(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/articles', service(options));

  // Get our initialize service to that we can bind hooks
  const articleService = app.service('/articles');

  // Set up our before hooks
  articleService.before(hooks.before);

  // Set up our after hooks
  articleService.after(hooks.after);
};
