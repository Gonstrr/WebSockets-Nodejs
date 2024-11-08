const express = require('express');
const cors = require('cors');
require('socket.io');

class Server {

    constructor() {
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')( this.server );
        // Middlewares
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
        // sockets
        this.sockets();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Directorio Público
        this.app.use( express.static('public') );
    }

    routes() {
        //this.app.use( this.paths.auth, require('../routes/auth'));
    }

    sockets(){
        this.io.on('connection', socket  => {
            console.log('Cliente Agustin conectado ! ', socket.id);
            
            socket.on('disconnect', () =>{
                console.log('Cliente fue desconectado.. ', socket.id);
            } )
        });
    };

    listen() {
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }
}




module.exports = Server;