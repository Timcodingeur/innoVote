export const RoleModel = (sequelize, DataTypes) => {
    return sequelize.define("Role", {
      role: {
        type: DataTypes.ENUM("membre", "propriétaire"),
        allowNull: false,
      },
    });
  };