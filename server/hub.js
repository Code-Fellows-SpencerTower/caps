'use strict';


// import Events constructor
const socketio = require('socket.io'); // similar to express - have to create a singleton

const PORT = process.env.PORT || 3000;

// singleton
const server = socketio(PORT);


const pickup = server.of(PORT + '/messages');


pickup.on('connection', (socket) => {

  console.log('Socket connected to messages: ', socket.id);
});


// generates a new socket for each connection
server.on('connection', (socket) => {

  // sends to inividual socket that connected
  socket.emit('id', {
    data: `This socket belongs to: ${socket.id}`,
  });



  // receiving pickup from vendor client
  socket.on('pickup', (payload) => {
    console.log('server.on: ', payload);

    // sending pickup to all other clients
    socket.broadcast.emit('pickup', payload);
    // server.emit('pickup', payload);
  });

  // emit to logger intransit route
  socket.on('in-transit', (payload) => {
    console.log(`Event: in-transit, time: ${new Date()}, Payload: ${payload}`);
  });

  socket.on('delivered', (payload) => {
    console.log('Hub: Package Delivered');
    socket.broadcast.emit('delivered', payload);
  });



});
// socket.io will maintain
// socket is like a request object - it has all the information




// // import Events constructor
// const EventEmitter = require('events'); // similar to express - have to create a singleton

// const eventPool = new EventEmitter(); // singleton for our event pool

// module.exports = eventPool;