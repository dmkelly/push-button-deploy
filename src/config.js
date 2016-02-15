'use strict';

require('dotenv').config({
  silent: true
});

var env = process.env;

var config = {
  button: {
    hwAddr: env.HW_ADDR
  }
};

module.exports = config;
