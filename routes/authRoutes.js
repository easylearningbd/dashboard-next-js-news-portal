const authController = require('../controllers/authControllers')
const router = require('express').Router()
const middleware = require('../middlewares/middleware')

router.post('/api/login', authController.login)
router.post('/api/writer/add',middleware.auth,middleware.role, authController.add_writer)
router.get('/api/news/writers',middleware.auth,middleware.role, authController.get_writers)

router.get('/api/news/writer/:id',middleware.auth,middleware.role, authController.getWriterById)
router.put('/api/update/writer/:id',middleware.auth,middleware.role, authController.update_writer)


module.exports = router