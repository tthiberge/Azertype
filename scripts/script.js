/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  // Récupération de la zone dans laquelle on va écrire le score
  let spanScore = document.querySelector(".zoneScore span")
  // Ecriture du texte
  let affichageScore = `${score} / ${nbMotsProposes}`
  // On place le texte à l'intérieur du span.
  spanScore.innerText = affichageScore
}

function afficherProposition(proposition) {
  let zoneProposition = document.querySelector(".zoneProposition")
  zoneProposition.innerText = proposition
}

/**
* Cette fonction lance le jeu.
* Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
*/
function lancerJeu() {
  // Initialisations
  let score = 0
  let i = 0
  let listeProposition = listeMots


  let btnValiderMot = document.getElementById("btnValiderMot")
  let inputEcriture = document.getElementById("inputEcriture")

  afficherProposition(listeProposition[i])


  btnValiderMot.addEventListener("click", () => {
      console.log(inputEcriture.value)
      if (inputEcriture.value === list[i]) {
          score++
      }
      i++
      afficherResultat(score, i)
      inputEcriture.value = ''
      if (list[i] === undefined) {
          afficherProposition("Le jeu est fini")
          btnValiderMot.disabled = true
      } else {
          afficherProposition(list[i])
      }

  })

  afficherResultat(score, i)
}

let listeBtnRadio = document.querySelectorAll("input[name=optionSource]")
// console.log(radioBtns);


for (let index = 0; index < listeBtnRadio.length; index++) {
  listeBtnRadio[index].addEventListener("change", (event) => {
      // Si c'est le premier élément qui a été modifié, alors nous voulons
      console.log(event.target);
      // jouer avec la listeMots.
      if (event.target.value === "1") {
          listeProposition = listeMots
      } else {
          // Sinon nous voulons jouer avec la liste des phrases
          listeProposition = listePhrases
      }
      // Et on modifie l'affichage en direct.
      afficherProposition(listeProposition[index])
  })
}
