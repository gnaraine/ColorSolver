import { StyleRegistry } from "styled-jsx";
import ColorSolver from "../components/ColorSolver";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.back}>
        <a href="https://gnaraine.github.io/">Back to Projects</a>
      </div>

      <ColorSolver />
    </div>
  );
}
