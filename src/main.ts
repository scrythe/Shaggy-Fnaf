import "./style.css";
import Game from "./game";
// import PlayIconPressed from "./playIconPressed.png";

const player: HTMLImageElement = document.querySelector("#player")!;
const test: HTMLDivElement = document.querySelector("#test")!;

const game = new Game(player, test);

const startGameSec: HTMLTableSectionElement | null =
  document.querySelector("#startGame");
document.querySelector("#playIcon")?.addEventListener("click", () => {
  startGameSec!.style.display = "none";
  document.body.requestFullscreen();
  interface ExtendedScreenOrientation extends ScreenOrientation {
    lock(orientation: string): Promise<void>;
  }
  (screen.orientation as ExtendedScreenOrientation).lock("landscape");
  game.start();
});

document.querySelector("#pause")?.addEventListener("click", () => {
  game.pause();
});

document.querySelector("#stop")?.addEventListener("click", () => {
  game.pause();
});

addEventListener("deviceorientation", (e) => game.input(e));
