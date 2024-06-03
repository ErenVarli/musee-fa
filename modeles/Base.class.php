<?php

class Base {
   /**
    * 
    * @var PDO $db : connexion à la base de données
    */
   protected PDO $db;
   /**
    * Constructeur de la classe sans paramètre
    */
   protected function __construct() {         
       // par défaut la connexion n'est pas établie.
    }
    
    /**
     * Méthode création d'une connexion à la base grâce aux 2 paramètres (user et mdp)
     * @param string $user : nom d'utilisateur
     * @param string $mdp : mot de passe
    */
    protected function setConnexionBase(string $user, string $mdp) {         
	try{
            $serveurBdDistant = 'localhost'; // Hote 

            $nomBdDistante = "projetsitefa"; //Base
            $this->db = new PDO("mysql:host=".$serveurBdDistant.";dbname=".$nomBdDistante,$user,$mdp);

            $this->db->query("SET CHARACTER SET utf8");
	}
	catch ( PDOException $erreur){
            die("Erreur de connexion à la base de données ".$erreur->getMessage());
	}
    }
    
    /**
     * methode publique définie pour pouvoir accéder à la méthode query() et prepare() de la propriété $db qui est privée.
     */
    protected function query(string $sql) {
        return $this->db->query($sql);
    }
    protected function prepare(string $sql){
        return $this->db->prepare($sql);
    }
    
}

