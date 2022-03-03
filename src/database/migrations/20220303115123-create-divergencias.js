'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { 
    await queryInterface.createTable('divergencias', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      reserva_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'reservas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      descricao: {
        type: Sequelize.STRING,
        length: 200,
        allowNull: false,
      },
      status: {
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
    await queryInterface.dropTable('divergencias'); 
  }
};
