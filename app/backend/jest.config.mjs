export default {
    testEnvironment: 'node',                      // Utilise un environnement Node.js pour Jest
    roots: ['<rootDir>/tests'],                   // Indique le dossier contenant les tests
    collectCoverage: true,                        // Active le rapport de couverture
    collectCoverageFrom: [                        // Spécifie les fichiers à inclure dans le rapport
      'src/**/*.mjs',
      '!src/swagger/**',                          // Exclut les fichiers Swagger
      '!src/config/**'                            // Exclut les fichiers de configuration
    ],
    coverageDirectory: 'coverage',               // Répertoire pour les rapports de couverture
    coverageReporters: ['json', 'lcov', 'text'], // Formats du rapport de couverture
    setupFilesAfterEnv: ['<rootDir>/tests/utils/setup.mjs'], // Fichier de setup Jest
    moduleFileExtensions: ['mjs', 'js'],         // Extensions de fichiers supportées
    transform: {}                                // Pas de transformation pour les fichiers ESM
  };
  