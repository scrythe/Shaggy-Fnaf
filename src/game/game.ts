import InputHandler from "./input";
import MovementHandler from "./movement";

class Game {
  private FPS = 60;
  private running?: boolean;
  private main: HTMLElement;
  private player: HTMLImageElement;
  private gameWidth = innerWidth;
  private gameHeight = innerHeight;
  private flyFuelBar: HTMLDivElement;
  private playerWidth: number;
  private playerHeight: number;
  private movementHandler: MovementHandler;
  private inputHandler: InputHandler;

  constructor(
    main: HTMLElement,
    player: HTMLImageElement,
    flyFuelBar: HTMLDivElement,
  ) {
    const fpsDuration = 1000 / this.FPS;
    setInterval(() => {
      this.update();
    }, fpsDuration);
    this.inputHandler = new InputHandler();
    this.main = main;
    this.player = player;
    this.flyFuelBar = flyFuelBar;
    this.playerWidth = 0;
    this.playerHeight = 0;
    this.movementHandler = new MovementHandler(
      this.inputHandler,
      this.flyFuelBar,
      this.gameWidth,
      this.gameHeight,
      this.playerWidth,
      this.playerHeight,
      player,
    );
  }

  start() {
    this.player.style.display = "block";
    this.flyFuelBar.parentElement!.style.display = "flex";
    this.running = true;
    this.gameWidth = this.main.clientWidth;
    this.gameHeight = this.main.clientHeight;
    this.playerWidth = this.player.clientWidth;
    this.playerHeight = this.player.clientHeight;
    this.movementHandler.updateGameAndPlayerSize(
      this.gameWidth,
      this.gameHeight,
      this.playerWidth,
      this.playerHeight,
    );
  }

  pause() {
    this.running = !this.running;
  }

  gameOver() {
    this.running = false;
    this.player.style.display = "none";
    this.flyFuelBar.parentElement!.style.display = "none";
  }

  private update() {
    if (!this.running) return;
    this.movementHandler.update();
  }
}

export default Game;
