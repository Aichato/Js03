var book = {};
book.titre = "L'Enfant Noir"; 
book.auteur = "Camara Laye";
book.année = 1953;
book.info = function(){
    console.log("Titre: " + this.titre);
    console.log("Auteur: " + this.auteur);
    console.log("année: " + this.année);
}
book.info();