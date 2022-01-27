'use strict';


const socketioClient = require('socket.io-client');

// dont have event pool - have a library that allows clients to reach out to server and make a connection - 
const driverSocket = socketioClient.connect('http://localhost:3000');


function pickup(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  driverSocket.emit('in-transit', intransit);
}

function intransit(payload) {
  console.log(`DRIVER: delivered ${payload.orderId}`);
  driverSocket.emit('delivered', (payload) => {
    console.log(`In transit: ${payload}`);
  });
}

driverSocket.on('pickup', pickup);

// console.logs current driver socket id
driverSocket.on('id', (payload) => {
  console.log(payload);
});







// const eventPool = require('./globalEvent.js');

// // upon pickup event, log order id, emit intransit event, log delivered
// const pickup = (payload) => {
//   console.log(`DRIVER: picked up ${payload.orderId}`);
//   eventPool.emit('intransit', intransit);
// };

// // send in-transit with order payload
// const intransit = (payload) => {
//   console.log(`DRIVER: delivered ${payload.orderId}`);
//   eventPool.emit('delivered', payload);
// };


// // listen for pickup event
// eventPool.on('pickup', pickup);