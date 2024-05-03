<?php
include "Base.class.php";
include "Visiteur.class.php";

class VisiteurDAO extends Base
{
    public function __construct()
    {
        parent::__construct();
    }

    private function setConnexionSelonRole(string $role)
    {
        switch ($role) {
            case "create":
                $login = "Id_create";
                $mdp = "pswd";
                break;

            case "read":
                $login = "id_read";
                $mdp = "pswd";
                break;

            case "update":
                $login = "id_update";
                $mdp = "pswd";
                break;

            case "delete":
                $login = "id_delete";
                $mdp = "pswd";
                break;
        }
        $this->setConnexionBase($login, $mdp);
    }

    public function ajouterVisiteur($prenom, $nom, $dateNaiss, $adresse, $ville, $cp, $nbAdultes, $nbEnfants, $dateArrivee, $telephone, $email): bool
    {
        //On valide ici les variables et les nettoies
        $prenom = filter_var($prenom, FILTER_DEFAULT);
        $nom = filter_var($nom, FILTER_DEFAULT);
        $dateNaiss = filter_var($dateNaiss, FILTER_DEFAULT);
        $adresse = filter_var($adresse, FILTER_DEFAULT);
        $ville = filter_var($ville, FILTER_DEFAULT);
        $cp = filter_var($cp, FILTER_DEFAULT);
        $nbAdultes = filter_var($nbAdultes, FILTER_VALIDATE_INT);
        $nbEnfants = filter_var($nbEnfants, FILTER_VALIDATE_INT);
        $dateArrivee = filter_var($dateArrivee, FILTER_DEFAULT);
        $telephone = filter_var($telephone, FILTER_DEFAULT);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);

        //Connexion avec le droit autorise -> Creer
        $this->setConnexionSelonRole("create");
        //Requetes preparee
        $requeteAExecuter = "INSERT INTO visiteurs (NomVis, PrenomVis, CpVis, VilleVis, DateArv, EmailVis, TelVis, NbEnfants, NbAdultes, adresse, DateNaissVis) 
                            VALUES (:nom, :prenom, :cp, :ville, :dateArrivee, :email, :telephone, :nbEnfants, :nbAdultes, :adresse, :dateNaiss)";
        $statement = $this->prepare($requeteAExecuter);
        $resultat = $statement->execute([
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':dateNaiss' => $dateNaiss,
            ':cp' => $cp,
            ':ville' => $ville,
            ':dateArrivee' => $dateArrivee,
            ':email' => $email,
            ':telephone' => $telephone,
            ':nbEnfants' => $nbEnfants,
            ':nbAdultes' => $nbAdultes,
            ':adresse' => $adresse
        ]);
        return $resultat;
    }
    public function ajoutTicket(): bool
    {
        //Connexion avec le droit autorise -> Creer
        $this->setConnexionSelonRole("create");
        //Requetes preparee
        $requeteAExecuter = "INSERT INTO ticket(idVis) VALUES (visiteurs.id)";
        $resultatDeLaRequete = $this->query($requeteAExecuter);
        if ($resultatDeLaRequete == 0)
            $resultat = false;
        else
            $resultat = true;
        $resultatDeLaRequete = null;
        return $resultat;
    }



}


