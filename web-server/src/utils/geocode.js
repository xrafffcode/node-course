const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoib21pcnUiLCJhIjoiY2t6eTg3YjNxMDh6bDJvbGpkOG92bXQ1cCJ9.icrMrGsjRBnqxuLO66z1DQ'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('ora bisa konek services', undefined)
        } else if (body.features.length === 0) {
            callback('rabisa geti koneksi', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}


module.exports = geocode