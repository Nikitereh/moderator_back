const ApiError = require('../error/ApiError')
const {Player} = require('../models/models')

class PlayerController {
    async create(req, res) {
        const {name} = req.body
        const player = await Player.create({name})
        return res.status(201).json(player)
    }
    async getOne(req, res, next) {
        const {id} = req.query
        if (!id) {
            return next(ApiError.badRequest('Не задан id'))
        }
        res.status(200).json(id)
    }
    async getAll(req, res) {
        const players = await Player.findAll()
        return res.status(200).json(players)
    }
}

module.exports = new PlayerController()