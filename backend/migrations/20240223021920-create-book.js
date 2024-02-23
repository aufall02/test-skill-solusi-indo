'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama_buku: {
        type: Sequelize.STRING(50)
      },
      kategori_buku: {
        type: Sequelize.STRING(20)
      },
      penerbit: {
        type: Sequelize.STRING(50)
      },
      ISBN: {
        type: Sequelize.STRING(10)
      },
      ISSN: {
        type: Sequelize.STRING(10)
      },
      pambuat: {
        type: Sequelize.STRING(50)
      },
      tahun_pembuatan: {
        type: Sequelize.INTEGER
      },
      harga: {
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Books');
  }
};