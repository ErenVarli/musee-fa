<?php

class Visiteur
{
private int $idVis;
private string $NomVis;
private string $PrenomVis;
private string $DateNaissVis;
private  string $Adresse;
private string $CpVis;
private string $VilleVis;
private string $DateArv;
private string $EmailVis;
private string $TelVis;
private int $NbEnfants;
private int $NbAdultes;

public function __construct(int $idVis, string $NomVis, string $PrenomVis, string $DateNaissVis, string $AdresseVis, string $CpVis, string $VilleVis, string $DateArv, string $EmailVis, string $TelVis, int $NbEnfants, int $NbAdultes) {
    $this->idVis = $idVis;
    $this->NomVis = $NomVis;
    $this->PrenomVis = $PrenomVis;
    $this->DateNaissVis = $DateNaissVis;
    $this->$AdresseVis = $AdresseVis;
    $this->CpVis = $CpVis;
    $this->VilleVis = $VilleVis;
    $this->DateArv = $DateArv;
    $this->EmailVis = $EmailVis;
    $this->TelVis = $TelVis;
    $this->NbEnfants = $NbEnfants;
    $this->NbAdultes = $NbAdultes;
}

public function getIdVis(): int {
    return $this->idVis;
}

public function getNomVis(): string {
    return $this->NomVis;
}

public function getPrenomVis(): string {
    return $this->PrenomVis;
}

public function getDateNaissVis(): string {
    return $this->DateNaissVis;
}
public function getAdresseVis(): string {
    return $this->Adresse;
}

public function setAdresseVis(string $Adresse): void {
    $this->Adresse = $Adresse;
}

public function getCpVis(): string {
    return $this->CpVis;
}

public function getVilleVis(): string {
    return $this->VilleVis;
}

public function getDateArv(): string {
    return $this->DateArv;
}

public function getEmailVis(): string {
    return $this->EmailVis;
}

public function getTelVis(): string {
    return $this->TelVis;
}

public function getNbEnfants(): int {
    return $this->NbEnfants;
}

public function getNbAdultes(): int {
    return $this->NbAdultes;
}

public function setIdVis(int $idVis): void {
    $this->idVis = $idVis;
}

public function setNomVis(string $NomVis): void {
    $this->NomVis = $NomVis;
}

public function setPrenomVis(string $PrenomVis): void {
    $this->PrenomVis = $PrenomVis;
}

public function setDateNaissVis(string $DateNaissVis): void {
    $this->DateNaissVis = $DateNaissVis;
}

public function setCpVis(string $CpVis): void {
    $this->CpVis = $CpVis;
}

public function setVilleVis(string $VilleVis): void {
    $this->VilleVis = $VilleVis;
}

public function setDateArv(string $DateArv): void {
    $this->DateArv = $DateArv;
}

public function setEmailVis(string $EmailVis): void {
    $this->EmailVis = $EmailVis;
}

public function setTelVis(string $TelVis): void {
    $this->TelVis = $TelVis;
}

public function setNbEnfants(int $NbEnfants): void {
    $this->NbEnfants = $NbEnfants;
}

public function setNbAdultes(int $NbAdultes): void {
    $this->NbAdultes = $NbAdultes;
}



}
