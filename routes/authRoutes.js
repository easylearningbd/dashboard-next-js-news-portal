const authController = require('../controllers/authControllers')
const router = require('express').Router()
const middleware = require('../middlewares/middleware')

router.post('/api/login', authController.login)
router.post('/api/writer/add',middleware.auth,middleware.role, authController.add_writer)


module.exports = router