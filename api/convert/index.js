const { parse } = require('url')
const { convertToTimeZone } = require('date-fns-timezone')

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { d, t } = query

  res.writeHead(200, {
    'Content-Type': 'application/json'
  })
  res.end(JSON.stringify({
    date: convertToTimeZone(new Date(d), { timeZone: t })
  }))
}
