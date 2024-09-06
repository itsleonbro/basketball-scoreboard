const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");

const addHomeOne = () => {
  scoreHome.textContent = parseInt(scoreHome.textContent) + 1;
};

const addHomeTwo = () => {
  scoreHome.textContent = parseInt(scoreHome.textContent) + 2;
};

const addHomeThree = () => {
  scoreHome.textContent = parseInt(scoreHome.textContent) + 3;
};

const addGuestOne = () => {
  scoreGuest.textContent = parseInt(scoreGuest.textContent) + 1;
};

const addGuestTwo = () => {
  scoreGuest.textContent = parseInt(scoreGuest.textContent) + 2;
};

const addGuestThree = () => {
  scoreGuest.textContent = parseInt(scoreGuest.textContent) + 3;
};

const newGame = () => {
  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
};
