const express = require('express')
const router = express.Router()
const { signout, signup } = require('../controllers/auth')

router.get('/signup', signup)
router.post('/signout', signout)

module.exports = router
