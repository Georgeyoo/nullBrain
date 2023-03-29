const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection/config');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    textBody: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
}, 
{
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'Comment'
});

module.exports = Comment;
