const { Model, DataTypes } = require('sequelize');

const sequelize = require('../connection/config');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    textBody: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
},
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'Post',
    });

module.exports = Post;
