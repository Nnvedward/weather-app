const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + encodeURIComponent(latitude) + '&lon=' + encodeURIComponent(longitude) + '&appid=a185c983edadd7d27997bab39049d8fa&units=metric'

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.message) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.daily[0].weather[0].description + '. It is currently ' + body.current.temp + ' degrees out. The humidity is ' + body.current.humidity)
        }
    })
}

module.exports = forecast