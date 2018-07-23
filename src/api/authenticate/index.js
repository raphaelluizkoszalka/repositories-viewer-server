import { Router } from 'express'
import request from 'request'

const router = new Router()

/* istanbul ignore next */
const requireProcessEnv = (name) => {
  if (!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable')
  }
  return process.env[name]
}

/**
 * @api {get} /authenticate retrieve and return GitHub API access_token
 */
router.get('/:code', (req, res) => {
  const payload = {
    client_id: requireProcessEnv('OAUTH_CLIENT_ID'),
    client_secret: requireProcessEnv('OAUTH_CLIENT_SECRET_ID'),
    code: req.params.code
  }
  const options = {
    method: 'post',
    body: payload,
    json: true,
    url: 'https://github.com/login/oauth/access_token',
    headers: {'User-Agent': 'Immobilien Scout 24 Test'}
  }
  request(options, function (err, response, body) {
    if (err) {
      res.send(err)
      return
    }
    console.log(body)
    res.send(body)
  })
})

export default router
