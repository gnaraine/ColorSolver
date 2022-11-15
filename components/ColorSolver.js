import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
export default function ColorSolver() {
  const [color, setColor] = useState();
  const [choices, setChoices] = useState([]);
  const [points, setPoints] = useState(0);

  const digits = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  const getColor = () => {
    return new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");
  };

  const generateColors = () => {
    const answer = getColor();
    setColor(answer);
    setChoices(
      [answer, getColor(), getColor()].sort(() => 0.5 - Math.random())
    );
  };

  const buttonClick = (e) => {
    if (e.target.value === color) {
      // e.target.className = styles.correct;
      if (!e.target.style.backgroundColor) {
        setPoints(points + 1);
      }
      e.target.style.backgroundColor = `#${e.target.value}`;
      setTimeout(() => generateColors(), 350);
    } else {
      // e.target.className = styles.incorrect;
      if (!e.target.style.backgroundColor) {
        setPoints(points - 1);
      }
      e.target.style.backgroundColor = `#${e.target.value}`;
    }
  };

  useEffect(() => {
    generateColors(color);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.points}>
        <p>Points: {points}</p>
      </div>
      <div
        className={styles.colorBox}
        style={{ background: `#${color}` }}
      ></div>
      <div className={styles.buttons}>
        {choices.map((choice) => (
          <button
            className={choice === color ? styles.correct : styles.incorrect}
            onClick={(e) => buttonClick(e)}
            key={choice}
            value={choice}
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
