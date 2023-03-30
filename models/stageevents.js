'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StageEvents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StageEvents.init({
    stage_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    stage_events_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StageEvents',
  });
  return StageEvents;
};