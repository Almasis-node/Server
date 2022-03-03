'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('produtos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        length: 45,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.BLOB,
        allowNull: false,
      },
      caracteristicas: {
        type: Sequelize.STRING,
        length: 200,
        allowNull: true,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }); 
  },

  async down (queryInterface, Sequelize) {  
    await queryInterface.dropTable('produtos'); 
  }
};
