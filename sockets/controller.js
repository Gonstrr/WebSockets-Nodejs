const { Socket } = require("socket.io");



const socketController = (socket) => {
    console.log('Cliente conectado', socket.id);

    socket.on('disconnect', () => {
        console.log('Cliente Desconectado', socket.id);
    });

    socket.on('enviar-mensaje', (payload, callback) => {
        const id = 291532;
        callback(id);
        socket.broadcast.emit('enviar-mensaje', payload);
    });
};

module.exports = { socketController };