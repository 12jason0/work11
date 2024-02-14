const { DataTypes } = require('sequelize');

const PostModel = (sequelize) => {
    return sequelize.define('post', {
        //컬럼 정의
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //not null
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = PostModel;
