'use strict';

var jenkinsApi = require('jenkins-api');
var config = require('./config');

var jenkins = jenkinsApi.init(config.jenkins.connectionString);

function build(callback) {
  jenkins.build(config.jenkins.job, function(err, res) {
    if (err) {
      return callback(err);
    }
    if (res.statusCode < 200 || res.statusCode >= 400) {
      return callback(new Error(res.statusMessage));
    }
    callback(null, res.body);
  });
}

module.exports.build = build;
