const { DataTypes } = require('sequelize');

const MemberModel = (sequelize) => {
    return sequelize.define('member', {
        //sequelize가 알아서 만들어줌 안적어도 됨
        // id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     primaryKey: true,
        //     autoIncrement: true,
        // },
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
