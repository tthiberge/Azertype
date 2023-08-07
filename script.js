const listeMots = ["Bonjour", "Vache", "Yeah"]
const listePhrases = ["Pas de panique!", "La vie, l'univers et le reste", "Merci pour le poisson"]
let score = 0

let listType = ""

console.log(listType)

while (listType !== "mots" && listType !== "phrases") {
  listType = prompt("Souhaitez vous la liste de mots ou de phrases? Ecrire mots ou phrases")
  console.log(listType)
}

if (listType === "mots") {
  for (let index = 0; index < listeMots.length; index++) {
    let res_1 = prompt(`Entrez ${listeMots[index]}`)
    if (res_1 === listeMots[index]) {
      score += 1
    }
  }
  console.log(score);
} else {
  for (let index = 0; index < listePhrases.length; index++) {
    let res_1 = prompt(`Entrez ${listePhrases[index]}`)
    if (res_1 === listePhrases[index]) {
      score += 1
    }
  }
  console.log(score);
}


// for (let index = 0; index < listeMots.length; index++) {
//   let res_1 = prompt(`Entrez ${listeMots[index]}`)
//   if (res_1 === listeMots[index]) {
//     score += 1
//   }
// }
// console.log(score);
