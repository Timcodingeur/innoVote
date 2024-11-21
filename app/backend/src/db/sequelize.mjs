import { Sequelize, DataTypes } from "sequelize";
import EventModel from "./models/event.mjs"; // Modèle Event
import ParticiperModel from "./models/participer.mjs"; // Modèle Participer
import ProjetModel from "./models/projet.mjs"; // Modèle Projet
import RoleModel from "./models/role.mjs"; // Modèle RoleProjet
import UserModel from "./models/user.mjs"; // Modèle User
import SlideModel from "./models/slide.mjs"; // Modèle Slide
import "dotenv/config"; // Chargement des variables d'environnement

// Initialisation de l'instance Sequelize avec les paramètres de la base de données
const sequelize = new Sequelize(
  process.env.DB_NAME, // Nom de la base de données
  process.env.USER, // Nom d'utilisateur
  process.env.PASSWORD, // Mot de passe
  {
    host: process.env.HOST, // Adresse de l'hôte
    port: process.env.PORT, // Port de connexion
    dialect: "mysql", // Type de base de données
    logging: false, // Désactivation des logs pour un affichage plus propre
  }
);

// Initialisation des modèles avec Sequelize
const User = UserModel(sequelize, DataTypes);
const Slide = SlideModel(sequelize, DataTypes);
const Role = RoleModel(sequelize, DataTypes);
const Projet = ProjetModel(sequelize, DataTypes);
const Event = EventModel(sequelize, DataTypes);
const Participer = ParticiperModel(sequelize, DataTypes);

// Définition des relations entre les modèles

// Relation Projet -> Slide
Projet.hasMany(Slide, { foreignKey: { name: "idProject", allowNull: false } });
Slide.belongsTo(Projet, { foreignKey: { name: "idProject", allowNull: false } });

// Relation Slide -> Event
Slide.hasOne(Event, { 
  foreignKey: { name: "idSlide", allowNull: false }, 
  onDelete: "CASCADE", // Suppression en cascade si un Slide est supprimé
});
Event.belongsTo(Slide, { foreignKey: { name: "idSlide", allowNull: false } });

// Relation Event -> User
Event.hasMany(User, { foreignKey: { name: "idEvent", allowNull: false } });
User.belongsTo(Event, { foreignKey: { name: "idEvent", allowNull: false } });

// Relation User -> Projet via Role
User.belongsToMany(Projet, { through: Role }); // Utilisation d'une table intermédiaire
Projet.belongsToMany(User, { through: Role });

// Relation User -> Event via Participer
User.belongsToMany(Event, { through: Participer }); // Utilisation d'une table intermédiaire
Event.belongsToMany(User, { through: Participer });

// Fonction pour synchroniser la base de données
const initDb = () => {
  return sequelize.sync({}) // Synchronisation sans suppression préalable des tables existantes
    .then(() => {
      console.log("La base de données a bien été synchronisée");
    })
    .catch((error) => {
      console.error("Erreur lors de la synchronisation de la base de données :", error);
    });
};

// Export des modules pour les utiliser dans d'autres fichiers
export { sequelize, initDb, User, Event, Participer, Projet, Slide, Role };
