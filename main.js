const scoreButtons = document.querySelectorAll(".score__btn");
const submitButton = document.querySelector(".submit__btn");

const thankYouScore = document.querySelector(".thank-you__score");

const surveyContainer = document.querySelector(".survey__container");
const thankYouContainer = document.querySelector(".thank-you__container");

let selectedScores = [];
let lastSelectedScore = null;

scoreButtons.forEach((scoreBtn) => {
  scoreBtn.addEventListener("click", () => {
    const score = parseInt(scoreBtn.textContent);
    if (!selectedScores.includes(score)) {
      selectedScores.push(score);
    }
    lastSelectedScore = score;
  });
});

submitButton.addEventListener("click", () => {
  surveyContainer.classList.add("hidden");
  thankYouContainer.classList.remove("hidden");

  thankYouScore.textContent = lastSelectedScore;
});
