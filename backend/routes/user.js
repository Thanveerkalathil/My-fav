const express = require('express')
const { register,activateAccount } = require('../controller/user')
const router=express.Router()
router.post('/register',register)
router.post('/activate',activateAccount)


module.exports =router