'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//모델
db.Post = require('./post')(sequelize);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
