'use strict';

const service = require('feathers-sequelize');
const tag = require('./tag-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: tag(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/tags', service(options));

  // Get our initialize service to that we can bind hooks
  const tagService = app.service('/tags');

  // Set up our before hooks
  tagService.before(hooks.before);

  // Set up our after hooks
  tagService.after(hooks.after);
};
