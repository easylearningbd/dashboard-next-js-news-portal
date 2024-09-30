const newsControllers = require('../controllers/newsControllers')
const router = require('express').Router()
const middleware = require('../middlewares/middleware')
 
router.post('/api/news/add',middleware.auth,newsControllers.add_news)
router.get('/api/images',middleware.auth,newsControllers.get_images)
router.post('/api/images/add',middleware.auth,newsControllers.add_images)

router.get('/api/news',middleware.auth,newsControllers.get_dashboard_news)
router.get('/api/edit/news/:news_id',middleware.auth,newsControllers.get_edit_dashboard_news)

router.put('/api/news/update/:news_id',middleware.auth,newsControllers.update_news)

router.delete('/api/news/delete/:news_id',middleware.auth,newsControllers.delete_news) 

router.put('/api/news/status-update/:news_id',middleware.auth,newsControllers.update_news_status)

 // Frontend Api All
 router.get('/api/all/news',newsControllers.get_all_news)
 router.get('/api/category/all',newsControllers.get_categories)

module.exports = router