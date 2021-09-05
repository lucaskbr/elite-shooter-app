import { io } from 'socket.io-client';

// need http
const socket = io.connect('http://192.168.18.78:3000', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  // call the server-side function 'adduser' and send one parameter (value of prompt)
  console.log('conecta');
  console.log(socket.connected)
});

socket.io.on("reconnection_attempt", () => {
  console.log('reconnection_attempt')
});

socket.io.on("reconnect", () => {
  console.log('reconnect')
});

socket.on('connect_error', (err) => {
  // revert to classic upgrade
  console.log('deu pau');
  console.log(err);
});

socket.on("disconnect", (reason) => {
  console.log(reason)
});

const emitDashboardStart = (shootingRanges) => {
  console.log('dashboard:start')
  console.log(shootingRanges)
  socket.emit('dashboard:start', shootingRanges);
}

const emitShootingActivityStart = (shootingActivity) => {
  console.log('shootingActivity:start')
  console.log(shootingActivity)
  socket.emit('shootingActivity:start', shootingActivity);
}

const emitShootingActivityEnd = ({ shootingActivityId }) => {
  console.log('shootingActivityEnd')
  console.log(shootingActivityId)
  socket.emit('shootingActivity:end', { shootingActivityId });
}

const subscribeShootingActivityStarted = (callback) => {
  if (!socket) {
    console.log('subscribe error', socket)
  }

  console.log('shootingActivity:started')
  socket.on('shootingActivity:started', ({ shootingActivityId }) => callback(null, shootingActivityId))
}

const subscribeShootingActivityShotResult = (callback) => {
  if (!socket) {
    console.log('subscribe error', socket)
  }

  console.log('shootingActivity:shot:result')
  socket.on('shootingActivity:shot:result', ({ value }) => callback(null, value))
}

const subscribeShootingRangeActive = (callback) => {
  if (!socket) {
    console.log('subscribe error', socket)
  }
  console.log('shootingRange:active')
  socket.on('shootingRange:active', ({ shootingRangeId }) => callback(null, shootingRangeId))
}

const subscribeDisconnect = (callback) => {
  console.log('subscribeDisconnect')
  socket.on('socket:disconnect', ({ shootingRangeId }) => callback(null, shootingRangeId))
}

const operations = {
  emitDashboardStart,
  emitShootingActivityStart,
  emitShootingActivityEnd,
  subscribeShootingActivityStarted,
  subscribeShootingActivityShotResult,
  subscribeShootingRangeActive,
  subscribeDisconnect,
}

export { socket, operations };
