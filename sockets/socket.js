const { io } = require('../index')

io.on('connection', client => {
    console.log('Conectado al servidor');

    client.on('disconnect', () => { console.log('Se desconecto del servidor'); });

    client.on('mensaje', (payload) => {
        io.emit('mensaje', { admin: 'llegamos aqui'});
    })
});