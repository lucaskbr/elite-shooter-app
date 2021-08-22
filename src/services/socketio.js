import { io } from 'socket.io-client';

// need http
const socket = io.connect('http://192.168.18.73:3000', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  // call the server-side function 'adduser' and send one parameter (value of prompt)
  console.log('conecta');
  console.log(socket.connected)
});


socket.on('connect_error', (err) => {
  // revert to classic upgrade
  console.log('deu pau');
  console.log(err);
});

// console.log('aaaaaaaaaaaa');

// const handleShotResult = () => {
//   socket.on('SHOT_RESULT', (args) => {
//     console.log(args)
//   })
// }


// socket.emit('shootActivity:start', { placeId: '1', sensorEquipmentId: '1' })
// socket.emit('shootActivity:shot', {  })




const emitDashboardStart = (shootingRanges) => {
  console.log('dashboardStart')
  console.log(shootingRanges)
  socket.emit('dashboard:start', shootingRanges);
}

const emitShootingActivityStart = (shootingActivity) => {
  console.log('shootingActivityStart')
  console.log(shootingActivity)
  socket.emit('shootingActivity:start', shootingActivity);
}

const emitShootingActivityEnd = () => {
  console.log('shootingActivityEnd')
  socket.emit('shootingActivity:end', { });
}

const listenShootingActivityStarted = (callback) => {
  console.log('shootingActivityStarted')
  socket.on('shootingActivity:started', ({ shootingActivityId }) => callback(null, shootingActivityId))
}

const listenShootingActivityShotResult = (callback) => {
  console.log('shootingActivityShotResult')
  socket.on('shootingActivity:shot:result', ({ value }) => callback(null, value))
}

const listenShootingRangeActive = (callback) => {
  console.log('listenShootingRangeActive')
  socket.on('shootingRange:active', ({ shootingRangeId }) => callback(null, shootingRangeId))
}

const listenDisconnect = (callback) => {
  console.log('listenDisconnect')
  socket.on('socket:disconnect', ({ shootingRangeId }) => callback(null, shootingRangeId))
}

const operations = {
  emitDashboardStart,
  emitShootingActivityStart,
  emitShootingActivityEnd,
  listenShootingActivityStarted,
  listenShootingActivityShotResult,
  listenShootingRangeActive,
  listenDisconnect
}

export { socket, operations };
