const router = require('./auth')

const express = require('express').Router()
// const router = express.Router()

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' })
// })

router.use('/auth', require('./auth'))
// router.use('/boards', require('./board'))
// router.use('/boards/:boardId/sections', require('./section'))
// router.use('/boards/:boardId/tasks', require('./task'))

module.exports = router
