const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.post('/', userController.create)
router.get('/all', userController.getAll)
router.get('/auth', userController.check)

module.exports = router