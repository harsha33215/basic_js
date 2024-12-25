document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Thanks for clicking! 💕";
    const container = document.querySelector(".container");
    container.appendChild(newParagraph);
  });
});
