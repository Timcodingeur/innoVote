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
      defaultValue: "Pas de description",
    },
    connCode: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: true, // Permettre les valeurs NULL
      references: {
        model: "Users",
        key: "id",
      },
      onDelete: "SET NULL", // Conserver cette action
    },
    isJoinable: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    joinCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
  });
};
