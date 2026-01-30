const cards = document.querySelectorAll(".card");
var cardsLink = cards.values("card__subtitle")

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (card.dataset.placeholder === "true") {
      event.preventDefault();
      alert("Trage zuerst eine echte URL in index.html ein.");
    }
  });
});
