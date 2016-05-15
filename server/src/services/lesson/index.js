'use strict';

const service = require('feathers-sequelize');
const lesson = require('./lesson-model');
const hooks = require('./hooks');

module.exports = function(){
  const app = this;

  const options = {
    Model: lesson(app.get('sequelize')),
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/lessons', service(options));

  // Get our initialize service to that we can bind hooks
  const lessonService = app.service('/lessons');

  // Set up our before hooks
  lessonService.before(hooks.before);

  // Set up our after hooks
  lessonService.after(hooks.after);
};
