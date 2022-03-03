const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      imagem: DataTypes.BLOB,
      caracteristicas: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
    }, {
      sequelize,
      tableName: 'produtos'
    });
  };

  static associate(models) {
    this.belongsToMany(models.Local, { 
      foreignKey: 'local_id', 
      through: 'produtos_locais', 
      as: 'produtos' 
    });

    this.hasMany(models.Reserva, {
      foreignKey: 'produto_id',
      as: 'produto' 
    });
  }
};

module.exports = Produto;