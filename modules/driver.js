'use strict';

const eventPool = require('./globalEvent.js');

// upon pickup event, log order id, emit intransit event, log delivered
const pickup = (payload) => {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  eventPool.emit('intransit', intransit);
};

// send in-transit with order payload
const intransit = (payload) => {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  eventPool.emit('delivered', payload);
};


// listen for pickup event
eventPool.on('pickup', pickup);