'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
   
    static associate(models) {
      this.belongsTo(models.User,{
        foreingnKey: {
          name: "user_id",
          type: DataTypes.UUID
        },
        as: "user"
      })
    }
  };
  Post.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUID4
    },
      title: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
      content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING
}, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
}
