const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Activity = sequelize.define('activity', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    type: {type: DataTypes.STRING},
    comment: {type: DataTypes.STRING},
    approved: {type: DataTypes.BOOLEAN, defaultValue: false}
})

const ActivityTwin = sequelize.define('activity_twin', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    count: {type: DataTypes.INTEGER, defaultValue: 0}
})

const ActivityMain = sequelize.define('activity_main', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    points: {type: DataTypes.INTEGER, defaultValue: 0}
})

const Player = sequelize.define('player', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    pointsForEntry: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    numberOfTwins: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    pointsForTwins: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    totalPoints: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
    totalMoney: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0}
})

const Table = sequelize.define('', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
})

const PlayerTable = sequelize.define('player_table', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
})

User.hasMany(Activity)
Activity.belongsTo(User)

User.hasMany(Table)
Table.belongsTo(User)

Table.hasMany(Player)
Player.belongsToMany(Table, {through: PlayerTable})

Activity.hasMany(ActivityTwin)
ActivityTwin.belongsTo(Activity)

Activity.hasMany(ActivityMain)
ActivityMain.belongsTo(Activity)

module.exports = {
    User,
    Activity,
    Table,
    Player,
    PlayerTable,
    ActivityTwin,
    ActivityMain
}