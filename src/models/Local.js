const { Model, DataTypes } = require('sequelize');

class Local extends Model {
  static init(sequelize) {
    super.init({
      sala: DataTypes.STRING,
      andar: DataTypes.INTEGER,
      bloco: DataTypes.STRING,
      descricao: DataTypes.STRING,
    }, {
      sequelize,
      tableName: 'locais'
    });
  };

  static associate(models) {
    this.belongsToMany(models.Produto, { 
      foreignKey: 'produto_id', 
      through: 'produtos_locais', 
      as: 'locais' 
    });

    this.hasMany(models.Reserva, {
      foreignKey: 'local_id',
      as: 'local'
    });
  }
};

module.exports = Local;