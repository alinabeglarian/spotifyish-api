const Sequelize = require('sequelize')
const db = require('../db')

const Playlist = db.define(
  'playlist', 
  {
    name: Sequelize.STRING
  },
  { 
    timestamps: false
  },
)

module.exports = Playlist