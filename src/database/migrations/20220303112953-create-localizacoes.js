'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('locais', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        length: 200,
        allowNull: true,
      },
      sala: {
        type: Sequelize.STRING,
        length: 10,
        allowNull: false,
      },
      andar: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      bloco: {
        type: Sequelize.STRING,
        length: 1,
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
    await queryInterface.dropTable('locais'); 
  }
};
