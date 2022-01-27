// queue

'use strict';

const uuid = require('uuid');
const socketio = require('socket.io');

const server = socketio(3000);
const chores = server.of('/chores');

const queue = {
  chores: {},
  addChore: function (chore) {
    // creates random id
    let id = uuid();
    this.chores[id] = chore;
    return {
      id,
      payload: chore,
    };
  },
  removeChore: function () { },
};

chores.on('connect', (socket) => {

  socket.on('add chore', chore => {
    let payload = queue.addChore(chore);
    chores.emit('chore added', payload);

  });
});