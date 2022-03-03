const { Model, DataTypes } = require('sequelize');

class Reserva extends Model {
  static init(sequelize) {
    super.init({
      produto_id: DataTypes.INTEGER,
      usuario_id: DataTypes.INTEGER,
      local_id: DataTypes.INTEGER,
      quantidade: DataTypes.INTEGER,
      data_inicio: DataTypes.DATE,
      data_fim: DataTypes.DATE,
    }, {
      sequelize,
      tableName: 'reservas'
    });
  };

  static associate(models) {
    this.belongsTo(models.Usuario, { 
      foreignKey: 'usuario_id',
      as: 'usuario' 
    });

    this.belongsTo(models.Produto, { 
      foreignKey: 'produto_id',
      as: 'produto' 
    });

    this.belongsTo(models.Local, { 
      foreignKey: 'local_id',
      as: 'local' 
    });

    this.hasOne(models.Divergencia, {
      foreignKey: 'reserva_id',
      as: 'reserva' 
    });
  }
};

module.exports = Reserva;