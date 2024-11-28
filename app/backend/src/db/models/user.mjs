export const UserModel = (sequelize, DataTypes) => {
  return sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le prénom est requis." },
      },
    },
    role: {
      type: DataTypes.ENUM("invité", "créateur", "owner"),
      allowNull: false,
      defaultValue: "invité",
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le nom de famille est requis." },
      },
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
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
        notEmpty: { msg: "Le mot de passe est requis." },
        len: {
          args: [8, 256],
          msg: "Le mot de passe doit comporter au moins 8 caractères.",
        },
      },
    },
  });
};
