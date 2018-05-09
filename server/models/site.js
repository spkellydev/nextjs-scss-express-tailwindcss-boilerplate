'use strict';
module.exports = (sequelize, DataTypes) => {
  var Site = sequelize.define('Site', {
    source: DataTypes.STRING,
    url: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Site.associate = function(models) {
    // associations can be defined here
  };
  return Site;
};