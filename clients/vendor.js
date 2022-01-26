'use strict';


const socketioClient = require('socket.io-client');

const vendorSocket = socketioClient.connect('http://localhost:3000');


// vendorSocket.on('pickup', (payload) => {
//   console.log('vendorSocket payload: ', payload);
// });


vendorSocket.emit('pickup', {
  'store': '1-206-flowers',
  'orderId': 'e3669048-7313-427b-b6cc-74010ca1f8f0',
  'customer': 'Spencer Tower',
  'address': 'Seattle, WA',
});

vendorSocket.on('delivered', (payload) => {
  console.log(`Thank You For Your Order ${payload.customer}`);
});



// vendorClient.on('delivered', (payload) => {
//   console.log(`Thank You ${payload.customer}`);
// });











// // import event pool
// const eventPool = require('./globalEvent.js');

// // // testing pickup route
// // eventPool.on('pickup', (payload) => {
// //   console.log('Delivery en route');
// //   console.log(payload);
// // });

// // listens to driver for delivered
// eventPool.on('delivered', (customer_name) => {
//   console.log(`Thank You ${customer_name}`);
// });

// // emit pickup event with payload
// eventPool.emit('pickup', {
//   'store': '1-206-flowers',
//   'orderId': 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//   'customer': 'Spencer Tower',
//   'address': 'Seattle, WA',
// });
