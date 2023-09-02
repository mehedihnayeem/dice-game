import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import diceImage from "../../assets/images/dices 1.png";

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <img src={diceImage} alt="dice" />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <Link to="/game">
          <button className="btn-dark">Play Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
