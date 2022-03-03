const { Model, DataTypes } = require('sequelize');

class Divergencia extends Model {
  static init(sequelize) {
    super.init({
      produto_id: DataTypes.INTEGER,
      descricao: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'divergencias'
    });
  };

  static associate(models) {
    this.belongsTo(models.Reserva, { 
      foreignKey: 'reserva_id',
      as: 'divergencia'
    });
  }
};

module.exports = Divergencia;