// const { DataTypes } = require('sequelize');

const CommentModel = (sequelize, DataTypes) => {
    return sequelize.define('comment', {
        content: DataTypes.TEXT('medium'),
    });
};

module.exports = CommentModel;
