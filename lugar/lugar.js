const axios = require('axios').default;

const getLugarlatlon = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    let baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${ encodeURL }&appid=07520840437d631487132e21f3556785`;

    let resp = await axios.get(baseURL)
    if (resp.data.length === 0) {
        throw new Error(`Error: No existe informacion para ${direccion}`);
    }
    const data = resp.data;
    const name = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;
    //    axios.get(baseURL)
    //         .then(resp => {
    //             console.log(resp.data.sys);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         });``

    return {
        name,
        lon,
        lat
    }

}


module.exports = {

    getLugarlatlon
}