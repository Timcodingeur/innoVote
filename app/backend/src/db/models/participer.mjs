export const ParticiperModel = (sequelize, DataTypes) => {
  return sequelize.define("Participer", {
    role: {
      type: DataTypes.STRING(50), // Rôle spécifique dans un événement
      allowNull: true,
    },
    dateJoined: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });
};
