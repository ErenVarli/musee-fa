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
    idVisiteur INT
);

/*
-- Création de la table: Site
CREATE TABLE IF NOT EXISTS Site (
    nomSite VARCHAR(60),
    adresseSite VARCHAR(60),
    cpSite VARCHAR(60),
    VilleSite VARCHAR(60)
);

-- Insertion des informations du site Fa
INSERT INTO site (nomSite, adresseSite, cpSite, VilleSite) VALUES ("Musée et Site Gallo-Romains du Fâ", "25 Rte du FA", "17120", "Barzan");
*/

/*TRIGGERS*/
-- Limiteur Nb adultes à 10
DELIMITER
 //
CREATE OR REPLACE TRIGGER limitationNbEnfantAdultes BEFORE INSERT ON
 visiteurs FOR EACH ROW
BEGIN
 IF NEW.NbEnfants > 10 OR NEW.NbAdultes > 10 THEN SIGNAL SQLSTATE '45002'
 SET MESSAGE_TEXT
 = "ERREUR! Le nombre d'adultes ou enfant ne doit pas dépasser 10!" ;
 END IF ;
END //


-- creation des identifiants
CREATE USER 'evarli_fa_create'@'%' IDENTIFIED BY 'b7x9SRf775AtBy';
GRANT INSERT on `2024_varli_bddprojetfa`.`visiteurs` to 'evarli_fa_create'@'%';

CREATE USER 'evarli_fa_read'@'%' IDENTIFIED BY '92wXuPvD72b8qM';
GRANT SELECT on `2024_varli_bddprojetfa`.`visiteurs` to 'evarli_fa_read'@'%';

CREATE USER 'evarli_fa_update'@'%' IDENTIFIED BY 'ydD6Z3zTYp597h';
GRANT UPDATE on `2024_varli_bddprojetfa`.`visiteurs` to 'evarli_fa_update'@'%';

CREATE USER 'evarli_fa_delete'@'%' IDENTIFIED BY 'yz36Yp9hT7Dd5Z';
GRANT DELETE on `2024_varli_bddprojetfa`.`visiteurs` to 'evarli_fa_delete'@'%';
