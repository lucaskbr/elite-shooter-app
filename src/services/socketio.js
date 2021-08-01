import { io } from 'socket.io-client';

const socket = io.connect('192.168.18.65:3000', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  // call the server-side function 'adduser' and send one parameter (value of prompt)
  console.log('conecta');
});

socket.on('connect_error', (err) => {
  // revert to classic upgrade
  console.log('deu pau');
  console.log(err);
});

console.log('aaaaaaaaaaaa');

// socket.emit('shot', { date: Date.now(), equipmentId: 'hash' })

export { socket };
