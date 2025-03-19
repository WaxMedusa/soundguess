let sounds = [
  { name: "Pac-Man Theme", src: "retro-game.mp3" },
  { name: "Old Telephone Ring", src: "phone_ringing.mp3" },
  { name: "Rotary Phone Dial", src: "sound-effect-vintage-rotary-dial-telephone-201246.mp3" },
  { name: "Iphone Notification", src: "COMCell_Message 1 (ID 1111)_BSB.mp3" },
  { name: "Fortnite Shield Potion", src: "fortnite-shield-potion-fortnite-battle-royale-gaming-sound-effect-hd-sound-effects.mp3" },
  { name: "Doorbell", src: "doorbell-223669.mp3" },
  { name: "Old Car Horn", src: "old-car-horn-153262.mp3" },
  { name: "Minecraft Eating", src: "nom-nom-nom_gPJiWn4.mp3" },
  { name: "Wii Sports", src: "wii_sports_sms.mp3" },
  { name: "Dial-up Internet", src: "dial-up.mp3" }
];

let scores = {
  grandparents: 0,
  kids: 0
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function updateTeamScore(team, points) {
  scores[team] += points;
  updateScores();
}

function updateScores() {
  document.getElementById('grandparents-score').textContent = scores.grandparents;
  document.getElementById('kids-score').textContent = scores.kids;
}

function resetScores() {
  scores.grandparents = 0;
  scores.kids = 0;
  updateScores();
}

function refreshGame() {
  shuffleArray(sounds);
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = '';
  renderGame();
}

const gameContainer = document.getElementById("game-container");

function renderGame() {
  sounds.forEach((sound, index) => {
    const soundBox = document.createElement("div");
    soundBox.classList.add("sound-box");
    soundBox.textContent = `Sound ${index + 1}`;
    soundBox.onclick = (e) => {
      if (!e.target.classList.contains('button-56')) {
        playSound(sound.src);
      }
    };

    

    const revealButton = document.createElement("button");
    revealButton.classList.add("button-56");
    revealButton.setAttribute("role", "button");
    revealButton.textContent = "Reveal Answer";

    const answer = document.createElement("div");
    answer.classList.add("answer");
    answer.textContent = sound.name;

    revealButton.onclick = () => {
      answer.classList.toggle("revealed");
    };

    soundBox.appendChild(revealButton);
    soundBox.appendChild(answer);
    gameContainer.appendChild(soundBox);
  });
}

// Initial render
renderGame();

let currentAudio = null;

function playSound(src) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  currentAudio = new Audio(src);
  currentAudio.play();
}
