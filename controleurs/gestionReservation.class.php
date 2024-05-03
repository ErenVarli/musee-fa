<?php
include("modeles/VisiteurDAO.class.php");
if (isset($_GET['action']))
    $action = filter_var($_GET['action'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
else
    $action = "reserver";

switch ($action) {
    case 'reserver':
        include("vues/formulaireReservation.html");
        break;

    case 'enregistrer';
        try {
            $nom = $_POST["nom"];
            $prenom = $_POST["prenom"];
            $dateNaiss = $_POST["dateNaiss"];
            $adresse = $_POST["adresse"];
            $ville = $_POST["ville"];
            $cp = $_POST["cp"];
            $nbAdultes = $_POST["nbAdultes"];
            $nbEnfants = $_POST["NbEnfants"];
            $dateArrivee = $_POST["DateArrivee"];
            $telephone = $_POST["Telephone"];
            $email = $_POST["email"];
            $connexionComp = new VisiteurDAO();
            $enregistrement = $connexionComp->ajouterVisiteur($nom, $prenom, $dateNaiss, $adresse, $ville, $cp, $nbAdultes, $nbEnfants, $dateArrivee, $telephone, $email);
            $connexionComp = null;
            include("vues/enregistrementPrisEnCompte.html");
        } catch (Exception $e) {
            include("vues/erreurLimitation.html");
        }
        break;





}
