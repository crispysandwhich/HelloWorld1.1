const express = require('express');
const cors = require('cors');
const app = express();

const PORT = 9137

app.use(cors())

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})

































// const { Server } = require('socket.io');

// const PORT = process.env.PORT || 4266
// const server = app.listen(PORT, () => console.log(`listening on port ${PORT}`))


// const router = require('./router')
// const io = new Server(server, { 
//   cors: {
//     origin: '*'
//   },
// })


// app.use(cors())
// app.use(router)


// io.on('connection', (socket) => {
//   socket.on('join', ({name, room}, callback) => {
//     const {user} = addUser({id: socket.id, name, room})

//     socket.emit('message', {user: 'admin', text: `${user.name}, welcome to the room ${user.room}`})
//     socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name} has joined`})

//     socket.join(user.room)
//   })

//   socket.on('sendMessage', (message, callback) => {
//     const user = getUser(socket.id)

//     io.to(user.room).emit('message', {user:user.name, text: message})

//     callback()
//   })

//   socket.on('disconnect', () => {
//     console.log('user has left')
//   })


// })
