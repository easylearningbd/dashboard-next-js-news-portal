const authController = require('../controllers/authControllers')

const router = require('express').Router()

router.post('/api/login', authController.login)


module.exports = router