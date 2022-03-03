'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('reservas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'produtos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      local_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'locais', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      data_fim: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('reservas'); 
  }
};
