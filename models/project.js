'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    gitUrl: DataTypes.STRING,
    herokuUrl: DataTypes.STRING,
    imageUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Project;
};