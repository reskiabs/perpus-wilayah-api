module.exports = (sequelize, DataTypes) => {
  const Pegawai = sequelize.define(
    "Pegawai",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nip: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tmt_cpns: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      tmt_pensiun: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      masa_kerja: {
        type: DataTypes.INTEGER,
      },
      jabatan: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "pegawai",
    }
  );

  return Pegawai;
};
