const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      cargo_nome: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'usuarios'
    });
  };

  static associate(models) {
    this.belongsToMany(models.Cargo, { 
      foreignKey: 'usuario_id',
      through: 'usuarios_cargo',
      as: 'cargo' 
    });

    this.hasMany(models.Reserva, {
      foreignKey: 'usuario_id',
      as: 'usuarios'
    });
  }
};

module.exports = Usuario;