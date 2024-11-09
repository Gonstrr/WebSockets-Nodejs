// Referencias del HTML
const lblOnline     = document.querySelector('#lblOnline');
const lblOffline    = document.querySelector('#lblOffline');
//desde elementos del html
const txtMensaje    = document.querySelector('#txtMensaje');
const btnEnviar     = document.querySelector('#btnEnviar');

const socket = io();

// Cuando el socket está conectado
socket.on('connect', () => {
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = 'block';
});

// Cuando el socket está desconectado
socket.on('disconnect', () => {
    console.log('Desconectado del servidor.. ');
    lblOnline.style.display = 'none';
    lblOffline.style.display = 'block';
});



socket.on('enviar-mensaje', (payload) => {
    console.log(payload)

})


btnEnviar.addEventListener('click', () => {

    const mensajeEnviados = txtMensaje.value;

    const payload = {
        mensajeEnviados,
        id: 'Gonzalo Salas dev',
        fecha: new Date().getTime()
    };

    socket.emit('enviar-mensaje', payload, (id) => {
        console.log('Desde el servidor' , id );
    });



   

});