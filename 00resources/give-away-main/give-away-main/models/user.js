const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model {
  // set up method to run on instance data (per user) to check password
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// create fields/columns for User model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: `https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png` 
    },
    profile_desc:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, maxime magnam. Cupiditate sed soluta incidunt aperiam voluptate. Cum excepturi officia omnis sequi, perferendis sunt obcaecati quasi neque officiis accusantium quod!"

    }
  },
  {
    hooks: {
      // set up beforeCreate lifecycle "hook" functionality
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },

      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;