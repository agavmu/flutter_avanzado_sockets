const Band = require("./band");

class Bands {
  constructor() {
    this.Bands = [];
  }

  addBand(band = new Band()) {
    this.Bands.push( band );
  }

  getBands() {
    return this.Bands;
  }

  deleteBand(id = '') {
    this.bands = this.bands.filter( band => band.id !== id);
    return this.Bands;
  }

  voteBand(id = '') {
    console.log('estamos aqui');
    console.log(this.bands);
    this.Bands = this.bands.map( band => {
        console.log('ya casi lo logramos');
        if ( band.id === id ) {
            console.log('si llegamos');
            band.votes++;
            return;
        } else {
            return band;
        }
    })
  }
}

module.exports = Bands;