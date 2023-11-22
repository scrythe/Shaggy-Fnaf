import styles from "./Game.module.css";
import playIcon from "../assets/playIcon.png";
import shaggyImg from "../assets/shaggy.png";

function Game() {
  return (
    <main id={styles.game}>
      <section id={styles.startGame}>
        <h2>Start Game</h2>
        <img id={styles.playIcon} src={playIcon} alt="" />
      </section>
      <section id={styles.gameOver}>
        <h2>Game Over</h2>
      </section>
      <img id={styles.player} src={shaggyImg} alt="" />
      <div id={styles.flyFuel}>
        <div></div>
      </div>
    </main>
  );
}

export default Game;
