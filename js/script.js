const scoreHome = document.getElementById("score-home");
const scoreGuest = document.getElementById("score-guest");
const homeEmoji = document.getElementById("home-emoji");
const guestEmoji = document.getElementById("guest-emoji");

const addHomeOne = () => {
  scoreHome.textContent = parseInt(scoreHome.textContent) + 1;
  displayEmoji();
};

const addHomeTwo = () => {
  scoreHome.textContent = parseInt(scoreHome.textContent) + 2;
  displayEmoji();
};

const addHomeThree = () => {
  scoreHome.textContent = parseInt(scoreHome.textContent) + 3;
  displayEmoji();
};

const addGuestOne = () => {
  scoreGuest.textContent = parseInt(scoreGuest.textContent) + 1;
  displayEmoji();
};

const addGuestTwo = () => {
  scoreGuest.textContent = parseInt(scoreGuest.textContent) + 2;
  displayEmoji();
};

const addGuestThree = () => {
  scoreGuest.textContent = parseInt(scoreGuest.textContent) + 3;
  displayEmoji();
};

const newGame = () => {
  scoreHome.textContent = 0;
  scoreGuest.textContent = 0;
  displayEmoji();
};

const displayEmoji = () => {
  homeEmoji.textContent = "😄";
  guestEmoji.textContent = "😄";

  if (parseInt(scoreHome.textContent) > parseInt(scoreGuest.textContent)) {
    homeEmoji.textContent = "😄";
    guestEmoji.textContent = "😔";
  } else if (
    parseInt(scoreHome.textContent) < parseInt(scoreGuest.textContent)
  ) {
    homeEmoji.textContent = "😔";
    guestEmoji.textContent = "😄";
  }
};
