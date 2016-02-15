'use strict';

require('dotenv').config({
  silent: true
});

var env = process.env;

var config = {
  button: {
    hwAddr: env.HW_ADDR
  },
  jenkins: {
    // See https://github.com/jansepar/node-jenkins-api#setup
    connectionString: env.JENKINS_CONNECTION_STRING,
    job: env.JENKINS_JOB
  }
};

module.exports = config;
