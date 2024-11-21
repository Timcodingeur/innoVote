import { Sequelize, DataTypes } from "sequelize";
import EventModel from "./models/event.mjs";
import ParticiperModel from "./models/participer.mjs";
import ProjetModel from "./models/projet.mjs";
import RoleModel from "./models/role.mjs";
import UserModel from "./models/user.mjs";
import SlideModel from "./models/slide.mjs";
import "dotenv/config";


const sequelize = new Sequelize(process.env.DB_NAME, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  port: process.env.PORT,
  dialect: "mysql",
  logging: false,
});

const User = UserModel(sequelize, DataTypes);
const Slide = SlideModel(sequelize, DataTypes)
const Role = RoleModel(sequelize, DataTypes)
const Projet = ProjetModel(sequelize, DataTypes)
const Event = EventModel(sequelize, DataTypes)
const Participer = ParticiperModel(sequelize, DataTypes)
// Relation Projet -> Slide
Projet.hasMany(Slide, { foreignKey: { name: "idProject", allowNull: false } });
Slide.belongsTo(Projet, { foreignKey: { name: "idProject", allowNull: false } });

// Relation Slide -> Event
Slide.hasOne(Event, { foreignKey: { name: "idSlide", allowNull: false }, onDelete: "CASCADE" });
Event.belongsTo(Slide, { foreignKey: { name: "idSlide", allowNull: false } });

// Relation Event -> User
Event.hasMany(User, { foreignKey: { name: "idEvent", allowNull: false } });
User.belongsTo(Event, { foreignKey: { name: "idEvent", allowNull: false } });

// Relation User -> Projet (RoleProjet)
User.belongsToMany(Projet, { through: Role });
Projet.belongsToMany(User, { through: Role });

// Relation User -> Event (Participer)
User.belongsToMany(Event, { through: Participer });
Event.belongsToMany(User, { through: Participer });

let initDb = () => {
  return sequelize.sync({}).then((_) => {
    console.log("La base de données db_products a bien été synchronisée");
  });
};



export { sequelize, initDb, User, Event, Participer, Projet, Slide, Role };
