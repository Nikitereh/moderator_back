const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const tableRouter = require('./tableRouter')
const playerRouter = require('./playerRouter')

router.use('/user', userRouter)
router.use('/table', tableRouter)
router.use('/player', playerRouter)

module.exports = router