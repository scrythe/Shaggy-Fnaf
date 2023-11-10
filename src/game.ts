class Game {
  private FPS = 60;
  private running?: boolean;
  constructor() {
    const fpsDuration = 1000 / this.FPS;
    setInterval(() => {
      this.update();
    }, fpsDuration);
  }

  startGame() {
    this.running = true;
  }

  stopGame() {
    this.running = false;
  }

  private update() {
    if (!this.running) return;
    console.log("test");
  }
}

export default Game;
