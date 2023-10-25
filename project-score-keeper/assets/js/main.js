const homeScoreElement = document.querySelector(".homeScore");
const awayScoreElement = document.querySelector(".awayScore");

const homePoints = (points) =>
  (homeScoreElement.textContent =
    Number(homeScoreElement.textContent) + points);

const awayPoints = (points) =>
  (awayScoreElement.textContent =
    Number(awayScoreElement.textContent) + points);

const resetBtn = (points) => (
  (homeScoreElement.textContent = "0"), (awayScoreElement.textContent = "0")
);
