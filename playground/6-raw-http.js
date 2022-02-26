const https = require('http')

const url = 'http://api.weatherstack.com/current?access_key=eef0d60447ec775ec72a1138ec521582&query=45, -75'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', chunk => {
        data = data + chunk.toString()
        console.log(chunk)
    })

    response.on('end', chunk => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.end()