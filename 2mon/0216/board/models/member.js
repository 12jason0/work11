const { DataTypes } = require('sequelize');

const MemberModel = (sequelize) => {
    return sequelize.define('member', {
        userId: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = MemberModel;
