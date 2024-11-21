export const SlideModel = (sequelize, DataTypes) => {
  return sequelize.define("Slide", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    note: {
      type: DataTypes.STRING(2048),
      allowNull: false,
      unique: true,
    },
    fileUrl: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        isUrl: { msg: "Le lien du fichier doit être une URL valide." },
      },
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
