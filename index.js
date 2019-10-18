require('dotenv').config()

const FastSpeedtest = require('fast-speedtest-api')

let speedtest = new FastSpeedtest({
  token: process.env.TOKEN,
  verbose: true, // default: false
  timeout: 10000, // default: 5000
  https: false, // default: true
  urlCount: 5, // default: 5
  bufferSize: 8, // default: 8
  unit: FastSpeedtest.UNITS.Mbps, // default: Bps
  proxy: 'http://35.156.252.186/auth_service/login', // default: undefined
})

speedtest
  .getSpeed()
  .then(s => {
    console.log(`Speed: ${s} Mbps`)
  })
  .catch(e => {
    console.error(e.message)
  })
