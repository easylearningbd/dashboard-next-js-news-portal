const newsControllers = require('../controllers/newsControllers')
const router = require('express').Router()
const middleware = require('../middlewares/middleware')
 
router.post('/api/news/add',middleware.auth,newsControllers.add_news)
router.get('/api/images',middleware.auth,newsControllers.get_images)
router.post('/api/images/add',middleware.auth,newsControllers.add_images)

router.get('/api/news',middleware.auth,newsControllers.get_dashboard_news)
router.get('/api/edit/news/:news_id',middleware.auth,newsControllers.get_edit_dashboard_news)


module.exports = router