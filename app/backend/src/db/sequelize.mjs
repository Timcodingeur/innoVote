import { Sequelize, DataTypes } from "sequelize";
import { EventModel } from "./models/event.mjs";
import { ParticiperModel } from "./models/participer.mjs";
import { ProjetModel } from "./models/projet.mjs";
import { RoleModel } from "./models/role.mjs";
import { UserModel } from "./models/user.mjs";
import { SlideModel } from "./models/slide.mjs";
import { ChoixModel } from "./models/choix.mjs";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,
  }
);

const User = UserModel(sequelize, DataTypes);
const Slide = SlideModel(sequelize, DataTypes);
const Role = RoleModel(sequelize, DataTypes);
const Projet = ProjetModel(sequelize, DataTypes);
const Event = EventModel(sequelize, DataTypes);
const Participer = ParticiperModel(sequelize, DataTypes);
const Choix = ChoixModel(sequelize, DataTypes);

// Associations

// Projet <-> Slide
Projet.hasMany(Slide, { foreignKey: { name: "projetId", allowNull: false } });
Slide.belongsTo(Projet, { foreignKey: { name: "projetId", allowNull: false } });

// Slide <-> Event
Slide.hasOne(Event, { foreignKey: { name: "slideId", allowNull: false }, onDelete: "CASCADE" });
Event.belongsTo(Slide, { foreignKey: { name: "slideId", allowNull: false } });

// Event <-> Choix
Event.hasMany(Choix, { foreignKey: { name: "eventId", allowNull: false } });
Choix.belongsTo(Event, { foreignKey: { name: "eventId", allowNull: false } });

// Projet <-> User via Role
User.belongsToMany(Projet, {
  through: Role,
  foreignKey: 'userId',
  otherKey: 'projetId',
});

Projet.belongsToMany(User, {
  through: Role,
  foreignKey: 'projetId',
  otherKey: 'userId',
});

// Relation Projet -> Slide
Projet.hasMany(Slide, { foreignKey: { name: 'projetId', allowNull: false } });
Slide.belongsTo(Projet, { foreignKey: { name: 'projetId', allowNull: false } });

// Relation Slide -> Event
Slide.hasMany(Event, { foreignKey: { name: 'slideId', allowNull: false }, onDelete: 'CASCADE' });
Event.belongsTo(Slide, { foreignKey: { name: 'slideId', allowNull: false } });


Event.belongsToMany(User, {
  through: Participer,
  foreignKey: 'eventId',
  otherKey: 'userId',
});

// Synchronisation de la base de données
const initDb = () => {
  return sequelize.sync()
    .then(() => {
      console.log("La base de données a bien été synchronisée");
    })
    .catch((error) => {
      console.error("Erreur lors de la synchronisation de la base de données :", error);
    });
};

export { sequelize, initDb, User, Event, Participer, Projet, Slide, Role, Choix };
