
let score = 0



function lancerJeu() {

  let choix = choisirPhrasesOuMots()
  let score = 0
  let nbreMotsProposés = 0

  if (choix === "mots") {
    score = lancerBoucleDeJeu(listeMots)
    nbreMotsProposés = listeMots.length
  } else {
    score = lancerBoucleDeJeu(listePhrases)
    nbreMotsProposés = listePhrases.length
  }

  afficherResultat(score, nbreMotsProposés)
}

function afficherResultat(score, nombreQuestions) {
  let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
  console.log(message);
}

function choisirPhrasesOuMots() {
  let choix = ""

  while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Souhaitez vous la liste de mots ou de phrases? Ecrire mots ou phrases")
  }

  return choix
}

function lancerBoucleDeJeu(tableauChoisi) {
  for (let index = 0; index < tableauChoisi.length; index++) {
    let res_1 = prompt(`Entrez ${tableauChoisi[index]}`)
    if (res_1 === tableauChoisi[index]) {
      score += 1
    }
  }
  return score
}

lancerJeu()
