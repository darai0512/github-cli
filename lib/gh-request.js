const fetch = require('node-fetch')
module.exports = async (url, auth, options = {}) => {
  // TODO for GraphQL header???
  if (typeof options.headers === 'undefined')
    options.headers = {Accept: 'application/vnd.github.v3+json'}
  else
    options.headers.Accept = 'application/vnd.github.v3+json'
  // Auth is 3 way, but supporting basic auth or OAuth2.
  // TODO OAuth2の場合に必要なcheckをまとめておく: only admin
  options.headers.Authorization = auth.includes(':')
    ? `Basic ${Buffer.from(auth, 'utf8').toString('base64')}`
    : `token ${auth}`
  if (typeof options.body === 'object')
    options.body = JSON.stringify(options.body)
  try {
    let res = await fetch(url, options);
    // res.headers.raw() => paging: link[0]
    res = await res.json(); // only body
    return res;
  } catch (err) {
    console.log(err)
  }
}