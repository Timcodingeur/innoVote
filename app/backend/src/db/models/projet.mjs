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
    owner: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Nom de la table associée
        key: "id",
      },
      onDelete: "SET NULL", // Supprimer ou réassigner si l'utilisateur disparaît
    },
  });
};
