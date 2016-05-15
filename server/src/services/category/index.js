'use strict';

const service = require('feathers-sequelize');
const category = require('./category-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: category(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/categories', service(options));

  // Get our initialize service to that we can bind hooks
  const categoryService = app.service('/categories');

  // Set up our before hooks
  categoryService.before(hooks.before);

  // Set up our after hooks
  categoryService.after(hooks.after);
};
