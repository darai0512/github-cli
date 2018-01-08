const {src, dst} = require('./secret')
const issue = require('./lib/issue')
// const pr = require('./lib/pr')

const basePath = '/api/v3'

const main = async () => {
  const subCommand = process.argv[2]
  const action = process.argv[3]
  switch (subCommand) {
    case 'issue':
      let issues;
      const path = basePath + '/repos/'
      switch (action) {
        case 'get':
          issues = await issue.get(src.endpoint + path + src.repository, src.auth)
          console.log(issues)
          break;
        case 'post':
          const jsonFilePath = process.argv[4]
          issues = require(jsonFilePath)
          issue.post(dst.endpoint + path + dst.repository, dst.auth, issues);
          break;
        default:
          // TODO stream
          issues = await issue.get(src.endpoint + path + src.repository, src.auth)
          issue.post(dst.endpoint + path + dst.repository, dst.auth, issues);
          break;
      }
      break;
    case 'pr':
      switch (action) {
        case 'search':
          const commitInfo = process.argv[4]
          // pr.consolePRNumber(commitInfo)
          break;
        default:
          break;
      }
      break;
  }
}

main()
