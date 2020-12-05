const Router = require('koa-router')
const router = new Router()
const {index} = require('../contollers/home')

router.get('/',index)

module.exports = router;