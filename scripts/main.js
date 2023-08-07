/*********************************************************************************
 *
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu.
 *
 *********************************************************************************/

lancerJeu()

const inputJoueur = document.getElementById("inputEcriture")
console.log(inputJoueur);

const validerJoueur = document.getElementById("btnValiderMot")
console.log(validerJoueur);

const motPropose=document.querySelector(".zoneProposition")
console.log(motPropose)

const zoneScore=document.querySelector(".zoneScore")
console.log(zoneScore)

const radios = document.querySelectorAll(".optionSource input")
console.log(radios)
