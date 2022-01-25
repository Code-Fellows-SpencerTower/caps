'use strict';

// import event pool
const eventPool = require('./globalEvent.js');

// // testing pickup route
// eventPool.on('pickup', (payload) => {
//   console.log('Delivery en route');
//   console.log(payload);
// });

// listens to driver for delivered
eventPool.on('delivered', (customer_name) => {
  console.log(`Thank You ${customer_name}`);
});

// emit pickup event with payload
eventPool.emit('pickup', {
  'store': '1-206-flowers',
  'orderId': 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  'customer': 'Spencer Tower',
  'address': 'Seattle, WA',
});
