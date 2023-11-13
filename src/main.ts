import "./assets/style.css";
import Game from "./game";
import InputHandler from "./input";
// import PlayIconPressed from "./playIconPressed.png";
//
interface ExtendedScreenOrientation extends ScreenOrientation {
  lock(orientation: string): Promise<void>;
}

interface DeviceOrientationEventiOS extends DeviceOrientationEvent {
  requestPermission?: () => Promise<"granted" | "denied">;
}

const main = document.querySelector("main")!;
const player: HTMLImageElement = document.querySelector("#player")!;
const flyFuelBar: HTMLDivElement = document.querySelector("#fly-fuel div")!;

const inputHandler = new InputHandler();
const game = new Game(main, player, flyFuelBar, inputHandler);

const startGameSec: HTMLTableSectionElement =
  document.querySelector("#startGame")!;
document.querySelector("#playIcon")?.addEventListener("click", startGame);

document.querySelector("#pause")?.addEventListener("click", () => {
  game.pause();
});

const gameOverSec: HTMLTableSectionElement =
  document.querySelector("#gameOver")!;
document.querySelector("#stop")?.addEventListener("click", () => {
  gameOverSec!.style.display = "block";
  game.gameOver();
});

function startGame() {
  startGameSec!.style.display = "none";
  document.querySelector("html")?.requestFullscreen();
  (screen.orientation as ExtendedScreenOrientation)
    .lock("landscape")
    .then(() => game.start())
    .catch(() => game.start());

  const requestPermission = (
    DeviceOrientationEvent as unknown as DeviceOrientationEventiOS
  ).requestPermission;
  if (typeof requestPermission === "function") {
    requestPermission().then((response: string) => {
      if (response == "granted")
        addEventListener("deviceorientation", (e) =>
          inputHandler.motionInput(e),
        );
    });
  } else
    addEventListener("deviceorientation", (e) => inputHandler.motionInput(e));
}

addEventListener("keyup", (e) => inputHandler.keyBoardInput(e));
addEventListener("keydown", (e) => inputHandler.keyBoardInput(e));
