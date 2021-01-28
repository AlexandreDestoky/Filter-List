const textRecherche = document.querySelector(".text");
const liste = document.querySelectorAll(".liste li");

//Quand on tape sur une touche
textRecherche.addEventListener("keyup", (e) => {
  for (let i = 0; i < liste.length; i++) {
    let elementDeListe = liste[i].innerText;
    let inputValeur = textRecherche.value;
    let motListe= (elementDeListe.substring(0,inputValeur.length));

    //Si la valeur de l'input est celle du mot alors il apparait sinon il disparait
    liste[i].style.display = motListe.toUpperCase() === inputValeur.toUpperCase() ? "block" : "none";
  }
});
