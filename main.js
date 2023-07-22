const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");

const ratingSpan = document.querySelector(".rating");
let rating = 0;

const ratingInputs = document.querySelectorAll("input");

ratingInputs.forEach((ratingInput) => {
  ratingInput.addEventListener("click", () => {
    rating = ratingInput.value;
  });
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
  ratingState.classList.add("hidden");
  thankYouState.classList.remove("hidden");
  ratingSpan.innerHTML = rating;
});
