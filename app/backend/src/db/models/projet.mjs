export const ProjetModel = (sequelize, DataTypes) => {
    return sequelize.define("Projet", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      connCode: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
      },
    });
  };