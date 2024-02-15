const { DataTypes } = require('sequelize');

const PostModel = (sequelize) => {
    return sequelize.define('post', {
        //컬럼 정의
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = PostModel;
