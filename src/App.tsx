import type { Component } from "solid-js";
import logo from "./logo.svg";
import styles from "./App.module.css";
import GameContainer from "./components/GameContainer";
import BottomMenu from "./components/BottomMenu";

const App: Component = () => {
  return (
    <>
      <GameContainer />
      <BottomMenu />
    </>
  );
};

export default App;
