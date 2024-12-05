export const UserModel = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pseudo: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le pseudo est requis." },
      },
    },
    role: {
      type: DataTypes.ENUM("invité", "créateur", "admin"),
      allowNull: false,
      defaultValue: "invité",
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: { msg: "Email invalide." },
        notEmpty: { msg: "L'email est requis." },
      },
    },
  });
};
