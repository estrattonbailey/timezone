const { listTimeZones } = require('timezone-support')

module.exports = (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'max-age=2592000' // one month
  })
  res.end(JSON.stringify(listTimeZones()))
}
