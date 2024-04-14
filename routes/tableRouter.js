const Router = require('express')
const router = new Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'table ok'})
})

module.exports = router