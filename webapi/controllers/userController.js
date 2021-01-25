const router = require('express').Router()
const userModel = require('../models/user/userModel')

router.post('/register', userModel.registerUser)
router.post('/login', userModel.loginUser)

module.exports = router;