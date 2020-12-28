const axios = require('axios').default;
const colors = require('colors');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima')
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;



// console.log(argv.direccion);
// lugar.getLugarlatlon(argv.direccion)
//     .then(console.log);

// clima.getClima(40.75, -74)
//     .then(console.log)
//     .catch(console.log)
const getInfo = async(direccion) => {


    try {
        let data = await lugar.getLugarlatlon(direccion);
        let temp = await clima.getClima(data.lat, data.lon);
        return (`La temperatura de ${direccion} es de : ${temp}`.yellow);
    } catch (err) {
        return (`ERROR: no se pudo determinar clima para ${direccion}`.red)
    }
    //console.log(`La temperatura de ${name} es de : ${temp}`);
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);