const {User} = require('../models/models')

class UserController {
    async create(req, res) {
        const {name, role, email, password} = req.body
        const user = await User.create({name, role, email, password})
        return res.status(201).json(user)
    }
    async getAll(req, res) {
        const users = await User.findAll()
        return res.status(200).json(users)
    }
    async check(req, res) {
        res.status(200).json({message: true})
    }
}

module.exports = new UserController()