const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", (event) => {
    if (card.dataset.placeholder === "true") {
      event.preventDefault();
      alert("Trage zuerst eine echte URL in index.html ein.");
    }
  });
});
