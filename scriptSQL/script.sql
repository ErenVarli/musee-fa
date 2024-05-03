-- Création de la table: visiteurs
CREATE TABLE IF NOT EXISTS visiteurs (
    idVis INT AUTO_INCREMENT PRIMARY KEY,
    NomVis VARCHAR(50),
    PrenomVis VARCHAR(50),
    DateNaissVis DATE,
    CpVis VARCHAR(5),
    VilleVis VARCHAR(50),
    DateArv VARCHAR(10),
    EmailVis VARCHAR(100),
    TelVis VARCHAR(10),
    NbEnfants INT,
    NbAdultes INT,
    adresse VARCHAR(100)
);

-- Création de la table: ticket
CREATE TABLE IF NOT EXISTS ticket(
    idTicket INT AUTO_INCREMENT PRIMARY KEY,
    dateAchatTicket VARCHAR(10), --enlever ici
    idVisiteur INT
);

-- Création de la table: Site
CREATE TABLE IF NOT EXISTS Site (
    nomSite VARCHAR(60),
    adresseSite VARCHAR(60),
    cpSite VARCHAR(60),
    VilleSite VARCHAR(60)
);

-- Insertion des informations du site Fa
INSERT INTO site (nomSite, adresseSite, cpSite, VilleSite) VALUES ("Musée et Site Gallo-Romains du Fâ", "25 Rte du FA", "17120", "Barzan");


/*TRIGGERS*/
-- Limiteur Nb adultes à 10
DELIMITER
    //
CREATE OR REPLACE TRIGGER limitationNbAdultes BEFORE INSERT ON
    visiteurs FOR EACH ROW
BEGIN
        IF NEW.NbAdultes > 10 OR NEW.NbAdultes THEN SIGNAL SQLSTATE '45001'
    SET MESSAGE_TEXT
        = "ERREUR! Le nombre d'adultes ne doit pas dépasser 10!" ;
    END IF ;
END //

-- Limiteur Nb enfantq à 10

DELIMITER
    //
CREATE OR REPLACE TRIGGER limitationNbAdultes BEFORE INSERT ON
    visiteurs FOR EACH ROW
BEGIN
        IF NEW.NbEnfants > 10 OR NEW.NbAdultes THEN SIGNAL SQLSTATE '45002'
    SET MESSAGE_TEXT
        = "ERREUR! Le nombre d'adultes ne doit pas dépasser 10!" ;
    END IF ;
END //


