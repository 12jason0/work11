//table를 잘 구분해서 table이 100개면 100개의 파일을 만들어야 나중에 찾기 편함
const { DataTypes } = require('sequelize');

const MemberModel = (sequelize) => {
    const Member = sequelize.define(
        'member',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false, //NOT NULL
                primaryKey: true,
                autoIncrement: true,
            },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            username: {
                type: DataTypes.STRING(30),
                allowNull: false,
            },
        },
        {
            tableName: 'member',
            freezeTableName: true,
            timestamps: false,
        }
    );

    return Member;
};

module.exports = MemberModel;
