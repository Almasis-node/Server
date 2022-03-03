'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('produtos_locais', { 
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
      local_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'locais', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('produtos_locais'); 
  }
};
