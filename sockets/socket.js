const { io } = require('../index');
const Bands = require('../models/bands');
const Band = require ('../models/band');

const bands = new Bands();

bands.addBand( new Band( 'Los corr'));
bands.addBand( new Band( 'Pecos ka'));
bands.addBand( new Band( 'La sonor'));
bands.addBand( new Band( 'Natusha'));

console.log(bands);

io.on('connection', client => {
    console.log('Conectado al servidor');

    client.emit('active-bands', bands.getBands());

    client.on('disconnect', () => { console.log('Se desconecto del servidor'); });

    client.on('vote-band', (payload) => {
        // console.log(payload.id);
        bands.voteBand(payload.id);
        io.emit('active-bands', bands.getBands());
    });

    client.on('add-band', (payload) => {
        const newBand = new Band(payload.name);
        bands.addBand(newBand)
        io.emit('active-bands', bands.getBands());
    })
});