'use strict';

const Sequelize = require('sequelize');
//process.env가 있으면 NODE_ENV로 들어가고 없으면 development로 들어감
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);

//model
db.Member = require('./Member')(sequelize);
//const model = require('./Member);
//const temp = model(sequelize);
//db.Member = temp

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
