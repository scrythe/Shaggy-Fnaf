class Game {
  private FPS = 60;
  private running?: boolean;
  private beta: number;
  private gamma: number;
  private main: HTMLElement;
  private player: HTMLImageElement;
  private currentPos: { x: number; y: number };
  private gameWidth = innerWidth;
  private gameHeight = innerHeight;
  private playerWidth: number;
  private playerHeight: number;
  private GRAVITY = 8;

  constructor(main: HTMLElement, player: HTMLImageElement) {
    const fpsDuration = 1000 / this.FPS;
    this.beta = 0;
    this.gamma = 0;
    setInterval(() => {
      this.update();
    }, fpsDuration);
    this.main = main;
    this.player = player;
    this.currentPos = { x: 0, y: 0 };
    this.playerWidth = this.player.clientWidth;
    this.playerHeight = this.player.clientHeight;
  }

  start() {
    this.running = true;
    this.gameWidth = this.main.clientWidth;
    this.gameHeight = this.main.clientHeight;
  }

  pause() {
    this.running = false;
  }

  input(e: DeviceOrientationEvent) {
    if (!e.beta) return;
    this.beta = e.beta;
    if (!e.gamma) return;
    this.gamma = e.gamma;
  }

  private update() {
    if (!this.running) return;
    this.movePlayer();
  }

  private movePlayer() {
    if (this.gamma < 0) {
      this.currentPos.x += this.beta;
      this.jumping();
    }
    this.currentPos.y += this.GRAVITY;
    this.borderCollision();
    this.animateMove();
  }

  private jumping() {
    const gammaPosVec = this.gamma + 90 - 20;
    if (gammaPosVec > 0) {
      const deltaVelocity = gammaPosVec / 6;
      const velocity = Math.pow(deltaVelocity, 1.4);
      this.currentPos.y -= velocity;
      // console.log(`deltaVelocity: ${deltaVelocity}`);
      // console.log(`velocity: ${velocity}`);
    }
    // console.log(`gamme: ${this.gamma}`);
    // console.log(`gammaPosVec: ${gammaPosVec}`);
  }

  private animateMove() {
    this.player.style.left = this.currentPos.x + "px";
    this.player.style.top = this.currentPos.y + "px";
  }

  private borderCollision() {
    if (this.currentPos.x + this.playerWidth > this.gameWidth)
      this.currentPos.x = this.gameWidth - this.playerWidth;
    if (this.currentPos.x < 0) this.currentPos.x = 0;
    if (this.currentPos.y + this.playerHeight > this.gameHeight)
      this.currentPos.y = this.gameHeight - this.playerHeight;
    if (this.currentPos.y < 0) this.currentPos.y = 0;
  }
}

export default Game;
