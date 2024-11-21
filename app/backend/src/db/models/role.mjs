export const RoleModel = (sequelize, DataTypes) => {
  return sequelize.define("Role", {
    role: {
      type: DataTypes.ENUM("membre", "propriétaire", "admin"),
      allowNull: false,
    },
  });
};
