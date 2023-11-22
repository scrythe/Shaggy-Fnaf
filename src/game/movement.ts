import InputHandler from "./input";

class MovementHandler {
  private inputHandler: InputHandler;
  private GRAVITY = 6;
  private FUELINCREASE = 8;
  private flyFuel: number;
  private MAXFUEL = 1200;
  private isFlying: boolean;
  private flyFuelBar: HTMLDivElement;
  private gameWidth: number;
  private gameHeight: number;
  private playerWidth: number;
  private playerHeight: number;
  private currentPos: { x: number; y: number };
  private player: HTMLImageElement;

  constructor(
    inputHandler: InputHandler,
    flyFuelBar: HTMLDivElement,
    gameWidth: number,
    gameHeight: number,
    playerWidth: number,
    playerHeight: number,
    player: HTMLImageElement,
  ) {
    this.inputHandler = inputHandler;
    this.flyFuel = this.MAXFUEL;
    this.isFlying = false;
    this.flyFuelBar = flyFuelBar;
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.playerWidth = playerWidth;
    this.playerHeight = playerHeight;
    this.currentPos = { x: 0, y: 0 };
    this.player = player;
  }

  update() {
    this.movePlayer();
    this.flyFuel += this.FUELINCREASE;
    if (this.flyFuel >= this.MAXFUEL) this.flyFuel = this.MAXFUEL;
    this.flyFuelBar.style.height = (this.flyFuel / this.MAXFUEL) * 100 + "%";
  }

  updateGameAndPlayerSize(
    gameWidth: number,
    gameHeight: number,
    playerWidth: number,
    playerHeight: number,
  ) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.playerWidth = playerWidth;
    this.playerHeight = playerHeight;
  }

  private movePlayer() {
    if (this.inputHandler.gamma < 0) {
      this.currentPos.x += this.inputHandler.beta;
      this.flying();
    }
    this.currentPos.y += this.GRAVITY;
    this.borderCollision();
    this.animateMove();
  }

  private animateMove() {
    this.player.style.left = this.currentPos.x + "px";
    this.player.style.top = this.currentPos.y + "px";
  }

  private flying() {
    if (!this.isFlying) return;
    const gammaPosVec = this.inputHandler.gamma + 90 - 20;
    if (gammaPosVec > 0) {
      const deltaVelocity = gammaPosVec / 6;
      const velocity = Math.pow(deltaVelocity, 1.4);
      const fuelConsumption = Math.pow(velocity, 1.3);
      if (this.flyFuel - fuelConsumption < 0) return (this.isFlying = false);
      this.flyFuel -= fuelConsumption;
      this.currentPos.y -= velocity;
    }
  }

  private borderCollision() {
    if (this.currentPos.x + this.playerWidth > this.gameWidth)
      this.currentPos.x = this.gameWidth - this.playerWidth;
    if (this.currentPos.x < 0) this.currentPos.x = 0;
    if (this.currentPos.y + this.playerHeight > this.gameHeight) {
      this.currentPos.y = this.gameHeight - this.playerHeight;
      this.isFlying = true;
      this.flyFuel += this.FUELINCREASE * 2;
    }
    if (this.currentPos.y < 0) this.currentPos.y = 0;
  }
}

export default MovementHandler;
