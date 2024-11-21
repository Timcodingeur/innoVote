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
      binary: {
        type: DataTypes.BLOB("long"), 
        allowNull: false,
        unique: true,
      },
    });
  };