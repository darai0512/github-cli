const request = require('./gh-request')
const querystring = require('querystring')

const qsOpt = {encodeURIComponent: querystring.unescape}
const path = '/pulls'

const self = {
  search: async (endpoint, auth) => {
    const query = {
      page: 1,
    }
    const url = endpoint + path
    const prs = []
    while (1) {
      const responses = await request(self.qs(url, query), auth)
      if (responses.length === 0) {
        break
      }
      for (const pr of responses) {
      }
      query.page++
    }
    return prs
  },
  qs: (url, query) => url + '?' + querystring.stringify(query, null, null, qsOpt),
}

module.exports = self
