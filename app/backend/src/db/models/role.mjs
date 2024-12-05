export const RoleModel = (sequelize, DataTypes) => {
  return sequelize.define("Role", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Users", // Assurez-vous que le nom de la table est correct
        key: "id",
      },
      onDelete: "CASCADE",
    },
    projetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Projets",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  });
};
