

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


--


CREATE TABLE `admin` (
  `id_Admin` int(11) NOT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `Prenom` varchar(100) DEFAULT NULL,
  `login` varchar(100) DEFAULT NULL,
  `pasword` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;



INSERT INTO `admin` (`id_Admin`, `nom`, `Prenom`, `login`, `pasword`) VALUES
(0, 'dupont', 'Marie', 'DM', 'admin');

-- --------------------------------------------------------

--
-- Structure de la table `auto_ecole`
--

CREATE TABLE `auto_ecole` (
  `id_ecole` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `login` varchar(100) DEFAULT NULL,
  `mot_de_passe` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `types_de_permis` varchar(255) DEFAULT NULL,
  `formules` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `id_avis` int(11) NOT NULL,
  `id_eleves` int(11) DEFAULT NULL,
  `Contenu` varchar(2000) DEFAULT NULL,
  `Date_publication` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `eleves`
--

CREATE TABLE `eleves` (
  `id_eleves` int(11) NOT NULL,
  `login` varchar(100) DEFAULT NULL,
  `Numéro_eleve` int(11) DEFAULT NULL,
  `mot_de_passe` varchar(100) DEFAULT NULL,
  `nom` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `Telephone` varchar(15) DEFAULT NULL,
  `Lieu_de_naissance` varchar(100) DEFAULT NULL,
  `date_naissance` date DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `Adresse` varchar(255) DEFAULT NULL,
  `code_postal` varchar(5) DEFAULT NULL,
  `Profession` varchar(100) DEFAULT NULL,
  `date_inscription` date DEFAULT NULL,
  `NEPH` varchar(12) DEFAULT NULL,
  `echec_ETG` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `examens`
--

CREATE TABLE `examens` (
  `id_examen` int(11) NOT NULL,
  `id_eleves` int(11) DEFAULT NULL,
  `taux_reussite` decimal(5,2) DEFAULT NULL,
  `date_examen` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `id_test` int(11) NOT NULL,
  `id_eleves` int(11) DEFAULT NULL,
  `theme` varchar(255) DEFAULT NULL,
  `date_test` date DEFAULT NULL,
  `score` decimal(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id_Admin`);

--
-- Index pour la table `auto_ecole`
--
ALTER TABLE `auto_ecole`
  ADD PRIMARY KEY (`id_ecole`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id_avis`),
  ADD KEY `fk_eleve` (`id_eleves`);

--
-- Index pour la table `eleves`
--
ALTER TABLE `eleves`
  ADD PRIMARY KEY (`id_eleves`);

--
-- Index pour la table `examens`
--
ALTER TABLE `examens`
  ADD PRIMARY KEY (`id_examen`),
  ADD KEY `fk_eleves` (`id_eleves`);

--
-- Index pour la table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id_test`),
  ADD KEY `fk_test_eleves` (`id_eleves`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `fk_eleve` FOREIGN KEY (`id_eleves`) REFERENCES `eleves` (`id_eleves`);

--
-- Contraintes pour la table `examens`
--
ALTER TABLE `examens`
  ADD CONSTRAINT `fk_eleves` FOREIGN KEY (`id_eleves`) REFERENCES `eleves` (`id_eleves`);

--
-- Contraintes pour la table `test`
--
ALTER TABLE `test`
  ADD CONSTRAINT `fk_test_eleves` FOREIGN KEY (`id_eleves`) REFERENCES `eleves` (`id_eleves`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
