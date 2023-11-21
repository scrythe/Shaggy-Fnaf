import styles from "./Game.module.css";

function Game() {
  return (
    <main id={styles.game}>
      <section id={styles.startGame}>
        <h2>Start Game</h2>
        <img id={styles.playIcon} src="./src/assets/playIcon.png" alt="" />
      </section>
      <section id={styles.gameOver}>
        <h2>Game Over</h2>
      </section>
      <img id={styles.player} src="./src/assets/shaggy.png" alt="" />
      <div id={styles.flyFuel}>
        <div></div>
      </div>
    </main>
  );
}

export default Game;
