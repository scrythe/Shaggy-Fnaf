import styles from "./GameContainer.module.css";
import playIcon from "../assets/playIcon.png";
import shaggyImg from "../assets/shaggy.png";
import { Show, createSignal } from "solid-js";
import Game from "../game/game";

function GameContainer() {
  let gameContainer: HTMLElement;
  let playerEl: HTMLImageElement;
  let flyFuelDiv: HTMLDivElement;
  const [isRunning, setRunning] = createSignal(false);

  const startGame = () => {
    setRunning(true);
    const game = new Game(gameContainer, playerEl, flyFuelDiv);

    document.querySelector("html")!.requestFullscreen();
    (screen.orientation as ExtendedScreenOrientation)
      .lock("landscape")
      .then(() => game.start())
      .catch(() => game.start());
  };

  return (
    <main ref={gameContainer!} id={styles.game}>
      <Show when={!isRunning()}>
        <section id={styles.startGame}>
          <h2>Start Game</h2>
          <img
            onClick={startGame}
            id={styles.playIcon}
            src={playIcon!}
            alt=""
          />
        </section>
      </Show>
      <section id={styles.gameOver}>
        <h2>Game Over</h2>
      </section>
      <img ref={playerEl!} id={styles.player} src={shaggyImg} alt="" />
      <div id={styles.flyFuel}>
        <div ref={flyFuelDiv!}></div>
      </div>
    </main>
  );
}

export default GameContainer;
