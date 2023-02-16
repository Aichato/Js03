var personne = {};
personne.nom = "Mariam"; 
personne.age = 30;
personne.info = function(){
    console.log("nom: " + this.nom);
    console.log("Age: " + this.age);
}
personne.info();