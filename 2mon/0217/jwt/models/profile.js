const { DataTypes } = require('sequelize');

const ProfileModel = (sequelize) => {
    return sequelize.define('profile', {
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
        //memberId: DataTypes.INTEGER
    });
};

module.exports = ProfileModel;
