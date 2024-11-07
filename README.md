# innoVote
Cette application de vote est conçue pour faciliter la gestion des votes lors d'événements de présentation, tels que des concours, des sessions de brainstorming, ou tout autre type d'événement où l'évaluation et les votes sont nécessaires. Elle permet aux utilisateurs de voter pour des présentations, de consulter un classement des participants, et d’obtenir des résultats détaillés.

## Fonctionnalités

- **Authentification par Email** : Les utilisateurs doivent se connecter via leur adresse email pour participer aux votes, ce qui permet de prévenir les votes multiples. Il est possible de restreindre l’accès aux adresses email spécifiques (par exemple, celles se terminant par `eduvaud`, `gmail`, etc.).

- **Téléchargement de Présentations** : Les présentations (PowerPoints, PDF, etc.) peuvent être téléchargées directement dans l'application, permettant aux utilisateurs d'y accéder sans avoir à changer de session ou de fichier entre chaque présentation.

- **Ordre de Passage** : L'application permet de structurer les présentations selon un ordre de passage prédéfini. Lorsqu'un groupe est sélectionné, la présentation démarre, et à la fin, les options de vote sont proposées.

- **Options de Vote Personnalisables** : Les utilisateurs peuvent exprimer leur avis sur chaque présentation à l'aide de boutons de vote personnalisés tels que "J'aime", "J'aime pas", "Bof", etc. Ces votes contribuent à un système de points qui alimente le classement.

- **Récapitulatif et Classement** : Une fois toutes les présentations terminées, un récapitulatif des votes est généré, avec le calcul des points et un classement des participants. Les organisateurs peuvent cliquer sur chaque participant pour consulter les détails des votes.

- **Suivi des Votants** : Les adresses email des votants sont enregistrées pour permettre de savoir qui a voté, sans afficher les choix individuels des votants pour garantir la confidentialité des votes.

- **Restriction d'Email** : Dans vos présentation vous pouver choisir d'accepter seulement certain type d'email (pour voir mettre par exeple uniquement celui de votre entreprise)

## Installation
### Si vous avez docker
1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/Timcodingeur/innoVote
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd innoVote
   ```
3. Lancer l'app avec docker :
   ```bash
   docker-compose up
   ```
### Si vous n'avez pas docker
3. Aller dans les deux répértoire :
   ```bash
   cd frontend
   cd backend
   ```
4. Lancer le backend avec
    ```bash
   npm start
   ```
5. Lancer le frontend avec
    ```bash
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

Avec cette application de vote, vos événements seront plus interactifs et plus organisés. N'hésitez pas à nous contacter pour toute question ou suggestion !
