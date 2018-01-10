# Features


# How to Use

depends on node.js over v8.0.0

## Install

```
$npm i -g github-cli
# or
$yarn i -g github-cli
```

## Setup

Sets credencial information to your [environment variables](./conf/credentials.js).
Or, you can rewrite configure file.
```
$sudo vim $(dirname $(which github-cli))/../lib/node_modules/github-cli/conf/credentials.js
{
  "src": {
    "endpoint": "http://your.corp.co.jp",
    "repository": "org/repo",
    "auth": "oauth2token"
  },
  "dst": {
    "endpoint": "https://api.github.com",
    "repository": "org/repo",
    "auth": "username:passwd"
  }
}
```

Basic Authentication(=your GitHub login `username:password`) or OAuth2(=Personal access token) are available.
In case of OAuth2, you need the following scopes.

- repo
- admin:org

Checks on GitHub->Settings->Personal access token->Select scopes

## Exec

```
$github-cli issue migrate
```

# TODO

- [ ] Use GraphQL API
- [ ] Migrate issue comments
- [ ] Migrate closed issue as close status
- [ ] Search pr from commit infomation
