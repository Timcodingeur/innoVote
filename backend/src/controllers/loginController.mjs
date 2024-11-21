import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../db/sequelize.mjs";

export const login = async (req, res) =>{
User.findOne({ where: { username: req.body.username } }).then((user) => {
    if (!user) {
      const message = `L'utilisateur demandé n'existe pas`;
      return res.status(404).json({ message });
    }
    bcrypt.compare(req.body.password, user.password).then((isPasswordValid) => {
      if (!isPasswordValid) {
        const message = `Le mot de passe est incorrecte`;
        return res.status(401).json({ message });
      } else {
        const token = jwt.sign({ userId: user.id }, process.env.PRIVATE_KEY, {
          expiresIn: "1y",
        });
        const message = `L'utilisateur a été connecté avec succès`;
        return res.json({ message, data: user, token });
      }
    });
  });
}