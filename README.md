# innoVote
Cette application de vote est conçue pour faciliter la gestion des votes lors d'événements de présentation, tels que des concours, des sessions de brainstorming, ou tout autre type d'événement où l'évaluation et les votes sont nécessaires. Elle permet aux utilisateurs de voter pour des présentations, de consulter un classement des participants, et d’obtenir des résultats détaillés.

## Langages, Frameworks et Outils

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)

## Fonctionnalités

- **Authentification par Email** : Les utilisateurs doivent se connecter via leur adresse email pour participer aux votes, ce qui permet de prévenir les votes multiples. Il est possible de restreindre l’accès aux adresses email spécifiques (par exemple, celles se terminant par `eduvaud`, `gmail`, etc.).

- **Téléchargement de Présentations** : Les présentations (PowerPoints, PDF, etc.) peuvent être téléchargées directement dans l'application, permettant aux utilisateurs d'y accéder sans avoir à changer de session ou de fichier entre chaque présentation.

- **Ordre de Passage** : L'application permet de structurer les présentations selon un ordre de passage prédéfini. Lorsqu'un groupe est sélectionné, la présentation démarre, et à la fin, les options de vote sont proposées.

- **Options de Vote Personnalisables** : Les utilisateurs peuvent exprimer leur avis sur chaque présentation à l'aide de boutons de vote personnalisés tels que "J'aime", "J'aime pas", "Bof", etc. Ces votes contribuent à un système de points qui alimente le classement.

- **Récapitulatif et Classement** : Une fois toutes les présentations terminées, un récapitulatif des votes est généré, avec le calcul des points et un classement des participants. Les organisateurs peuvent cliquer sur chaque participant pour consulter les détails des votes.

- **Suivi des Votants** : Les adresses email des votants sont enregistrées pour permettre de savoir qui a voté, sans afficher les choix individuels des votants pour garantir la confidentialité des votes.

- **Restriction d'Email** : Dans vos présentation vous pouver choisir d'accepter seulement certain type d'email (pour voir mettre par exeple uniquement celui de votre entreprise)

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/Timcodingeur/innoVote
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd innoVote
      ```
### Si vous avez docker
3. Lancer l'app avec docker :
   ```bash
   docker-compose up
   ```
### Si vous n'avez pas docker

3. Lancer le backend avec
    ```bash
   cd backend
   npm start
   ```
4. Lancer le frontend avec
    ```bash
   cd frontend
   npm run dev
   ```

## Utilisation

1. **Connexion** : Les utilisateurs se connectent via leur adresse email.
2. **Téléchargement des Présentations** : Les administrateurs peuvent télécharger les présentations directement dans l'application.
3. **Lancement de la Présentation** : Créé un ordre de passage, quand c'est au tour d'un groupe leurs présentation se lancer, et quand celle ci est fini le vote se lance
4. **Vote et Classement** : Les utilisateurs votent en utilisant les options définies. Un classement est généré à la fin de l'événement.

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. Forkez ce dépôt.
2. Créez une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`).
3. Commitez vos modifications (`git commit -m 'Ajout de la nouvelle fonctionnalité'`).
4. Poussez vers votre branche (`git push origin feature/nouvelle-fonctionnalite`).
5. Ouvrez une Pull Request.

## Licence

Ce projet est sous licence MIT. Consultez le fichier `LICENSE` pour plus d'informations.

---

Avec cette application de vote, vos événements seront plus interactifs et plus organisés. 
