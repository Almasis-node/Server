const { Model, DataTypes } = require('sequelize');

class Cargo extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'cargos'
    });
  };

  static associate(models) {
    this.belongsToMany(models.Usuario, { 
      foreignKey: 'cargo_id',
      through: 'usuarios_cargo',
      as: 'usuario' 
    });
  }
};

module.exports = Cargo;