import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Game from "./components/Game";
import BottomMenu from "./components/BottomMenu";

const App: Component = () => {
  return (
    <>
      <Game />
      <BottomMenu />
    </>
  );
};

export default App;
