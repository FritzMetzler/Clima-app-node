const axios = require('axios').default;
const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${lon}&appid=07520840437d631487132e21f3556785&units=metric`);

    let temp = resp.data.main.temp;
    return temp;

}
module.exports = {
    getClima

}