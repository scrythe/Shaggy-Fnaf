import "./style.css";
import Game from "./game";
// import PlayIconPressed from "./playIconPressed.png";
interface ExtendedScreenOrientation extends ScreenOrientation {
  lock(orientation: string): Promise<void>;
}
const main = document.querySelector("main")!;
const player: HTMLImageElement = document.querySelector("#player")!;
const test: HTMLDivElement = document.querySelector("#test")!;

const game = new Game(main, player, test);

const startGameSec: HTMLTableSectionElement | null =
  document.querySelector("#startGame");
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

document.querySelector("#stop")?.addEventListener("click", () => {
  game.pause();
});

addEventListener("deviceorientation", (e) => game.input(e));
