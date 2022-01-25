'use strict';

// import Events constructor
const EventEmitter = require('events'); // similar to express - have to create a singleton

const eventPool = new EventEmitter(); // singleton for our event pool

module.exports = eventPool;