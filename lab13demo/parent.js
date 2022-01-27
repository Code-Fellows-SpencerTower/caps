// parent

'use strict';

const socketClient = require('socket.io-client');

const HOST = process.env.HOST || 'http://localhost:3000';
const NAMESPACE = process.env.NAMESPACE || '/chores';

const chores = socketClient.connect(`${HOST}${NAMESPACE}`);

chores.emit('add chore', 'do the dishes');