import styles from "./BottomMenu.module.css";

function BottomMenu() {
  return (
    <footer id={styles.bottomMenu}>
      <button id="pause">Pausieren</button>
      <button id="stop">Stoppen</button>
    </footer>
  );
}

export default BottomMenu;
