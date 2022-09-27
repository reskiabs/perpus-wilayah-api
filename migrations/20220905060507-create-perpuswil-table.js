"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pegawai", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nip: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tmt_cpns: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tmt_pensiun: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      masa_kerja: {
        type: Sequelize.INTEGER,
      },
      jabatan: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pegawai");
  },
};
