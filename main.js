// Fact generation
let facts = ["I have two chihuahuas. One is named after Odie from Garfield, and the other is named Queso Blanco, nicknamed Casey", "I am working as an RA for NCSU", "I have two extra bones in my ankles", "I have flown a plane before", "I'm studying in Prague summmer 2022"]
let previousIndex = -1
function revealFact() {
  let index = Math.floor(Math.random() * facts.length)
  if (index === previousIndex) {
    revealFact()
    return
  }
  previousIndex = index

  let html = `<p>${facts[index]}</p>`
  document.querySelector("#fact-location").innerHTML = html
}
