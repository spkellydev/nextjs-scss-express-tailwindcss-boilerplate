"use strict";
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: { is: /^[a-z0-9\_\-]+$/i }
      },
      email: { type: DataTypes.STRING, validate: { isEmail: true } },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      salt: { type: DataTypes.STRING }
    },
    { freezeTableName: true }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
