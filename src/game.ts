class Game {
  private FPS = 60;
  private running?: boolean;
  private currentSpeed: number;
  private ACCELERATION = 5;
  private MAXSPEED = 5;
  private alpha: number;
  private beta: number;
  private gamma: number;
  private speed: { x: number; y: number };
  private player: HTMLImageElement;
  private currentPos: { x: number; y: number };
  private test: HTMLDivElement;

  constructor(player: HTMLImageElement, test: HTMLDivElement) {
    const fpsDuration = 1000 / this.FPS;
    this.currentSpeed = 0;
    this.alpha = 0;
    this.beta = 0;
    this.gamma = 0;
    this.speed = { x: 0, y: 0 };
    setInterval(() => {
      this.update();
    }, fpsDuration);
    this.player = player;
    this.test = test;
    this.currentPos = { x: 0, y: 0 };
  }

  start() {
    this.running = true;
  }

  pause() {
    this.running = false;
  }

  input(e: DeviceOrientationEvent) {
    if (!e.alpha) return;
    this.alpha = e.alpha;
    //if (this.alpha >= 90) this.alpha = 90;
    //if (this.alpha <= -90) this.alpha = -90;

    if (!e.beta) return;
    this.beta = e.beta;

    if (!e.gamma) return;
    this.gamma = e.gamma;
  }

  private update() {
    if (!this.running) return;
    if (this.currentSpeed <= this.MAXSPEED)
      this.currentSpeed *= this.ACCELERATION;
    this.speed = {
      x: Math.cos(this.alpha) * this.currentSpeed,
      y: Math.sin(this.beta) * this.currentSpeed,
    };

    //this.flightLength += this.maxSpeed;
    //console.log(this.speed);
    this.movePlayer();
  }

  private movePlayer() {
    this.currentPos.x += this.beta;
    this.currentPos.y -= this.gamma / 2;
    console.log(this.currentPos.x);
    this.player.style.left = this.currentPos.x + "px";
    this.player.style.top = this.currentPos.y + "px";
  }
}

export default Game;
