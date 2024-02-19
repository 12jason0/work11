'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);
//모델
db.Post = require('./post')(sequelize);
db.Member = require('./member')(sequelize);
db.Profile = require('./profile')(sequelize);
db.Comment = require('./comment')(sequelize, Sequelize);

//1:1
db.Member.hasOne(db.Profile, { foreignKey: 'memberId', onDelete: 'CASCADE' }); //foreignKey: 'memberId': Profile 모델에서 참조하는 외래 키
db.Profile.belongsTo(db.Member, { foreignKey: 'memberId', onDelete: 'CASCADE' });

//1:다
db.Post.hasMany(db.Comment);
db.Comment.belongsTo(db.Post);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
