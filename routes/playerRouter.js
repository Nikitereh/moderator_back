const Router = require('express')
const router = new Router()
const playerController = require('../controllers/playerController')

router.post('/', playerController.create)
router.get('/all', playerController.getAll)
router.get('/', playerController.getOne)

module.exports = router