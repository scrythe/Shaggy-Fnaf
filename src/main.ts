import "./style.css";
import Game from "./game";
// import PlayIconPressed from "./playIconPressed.png";
interface ExtendedScreenOrientation extends ScreenOrientation {
  lock(orientation: string): Promise<void>;
}
const main = document.querySelector("main")!;
const player: HTMLImageElement = document.querySelector("#player")!;
const flyFuelBar: HTMLDivElement = document.querySelector("#fly-fuel div")!;

const game = new Game(main, player, flyFuelBar);

const startGameSec: HTMLTableSectionElement =
  document.querySelector("#startGame")!;
document.querySelector("#playIcon")?.addEventListener("click", () => {
  startGameSec!.style.display = "none";
  document.querySelector("html")?.requestFullscreen();
  (screen.orientation as ExtendedScreenOrientation)
    .lock("landscape")
    .then(() => game.start())
    .catch(() => game.start());
});

document.querySelector("#pause")?.addEventListener("click", () => {
  game.pause();
});

const gameOverSec: HTMLTableSectionElement =
  document.querySelector("#gameOver")!;
document.querySelector("#stop")?.addEventListener("click", () => {
  gameOverSec!.style.display = "block";
  game.gameOver();
});

addEventListener("deviceorientation", (e) => game.input(e));
