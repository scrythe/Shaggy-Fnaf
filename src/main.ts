import "./style.css";
import Game from "./game";
// import PlayIconPressed from "./playIconPressed.png";

const game = new Game();

document.querySelector("#start")?.addEventListener("click", () => {
  game.startGame();
});

const startGameSec: HTMLTableSectionElement | null =
  document.querySelector("#startGame");
document.querySelector("#playIcon")?.addEventListener("click", () => {
  startGameSec!.style.display = "none";
  game.startGame();
});

document.querySelector("#stop")?.addEventListener("click", () => {
  game.stopGame();
});
