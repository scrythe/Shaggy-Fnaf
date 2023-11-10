import "./style.css";
import Game from "./game";

const game = new Game();

document.querySelector("#start")?.addEventListener("click", () => {
  game.startGame();
});

document.querySelector("#stop")?.addEventListener("click", () => {
  game.stopGame();
});
