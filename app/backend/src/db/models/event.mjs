export const EventModel = (sequelize, DataTypes) => {
  return sequelize.define("Event", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    slideId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Slides",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  });
};
