import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

//images
import dice1 from "../../assets/images/dice_1.png";
import dice2 from "../../assets/images/dice_2.png";
import dice3 from "../../assets/images/dice_3.png";
import dice4 from "../../assets/images/dice_4.png";
import dice5 from "../../assets/images/dice_5.png";
import dice6 from "../../assets/images/dice_6.png";

function index() {
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState(null);
  const [selectDice, setSelecDice] = useState(1);
  const [message, setMessage] = useState("");
  const [showRule, setShowRule] = useState(false);

  const handleDiceImg = (e) => {
    if (selectNum) {
      setMessage("");
      setSelecDice(Math.floor(Math.random() * 6) + 1);
    } else {
      setMessage("You have not selected any number");
    }
  };

  useEffect(() => {
    let result;
    if (Number(selectNum) === Number(selectDice)) {
      result = Number(score) + Number(selectNum);
    } else {
      result = Number(score) - Number(selectNum);
    }
    setScore(result);
    setSelectNum(null);
  }, [selectDice]);

  let imgSrc;

  if (selectDice === 1) {
    imgSrc = dice1;
  } else if (selectDice === 2) {
    imgSrc = dice2;
  } else if (selectDice === 3) {
    imgSrc = dice3;
  } else if (selectDice === 4) {
    imgSrc = dice4;
  } else if (selectDice === 5) {
    imgSrc = dice5;
  } else if (selectDice === 6) {
    imgSrc = dice6;
  }

  console.log(
    "selectDice: " + selectDice,
    "selectNum: " + selectNum,
    "score: " + score
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link to="/">
          <button className="btn-dark"> Dice Game</button>
        </Link>
        <p className={styles.message}>{!selectNum && message}</p>
      </div>

      <div className={styles.score_and_selector}>
        <div className={styles.score}>
          <h1>Total Score: {score}</h1>
        </div>
        <div className={styles.selector}>
          <button
            value={1}
            onClick={(e) => {
              setSelectNum(e.target.value);
            }}
            className={Number(selectNum) === 1 ? `${styles.active}` : ""}
          >
            1
          </button>
          <button
            value={2}
            onClick={(e) => {
              setSelectNum(e.target.value);
            }}
            className={Number(selectNum) === 2 ? `${styles.active}` : ""}
          >
            2
          </button>
          <button
            value={3}
            onClick={(e) => {
              setSelectNum(e.target.value);
            }}
            className={Number(selectNum) === 3 ? `${styles.active}` : ""}
          >
            3
          </button>
          <button
            value={4}
            onClick={(e) => {
              setSelectNum(e.target.value);
            }}
            className={Number(selectNum) === 4 ? `${styles.active}` : ""}
          >
            4
          </button>
          <button
            value={5}
            onClick={(e) => {
              setSelectNum(e.target.value);
            }}
            className={Number(selectNum) === 5 ? `${styles.active}` : ""}
          >
            5
          </button>
          <button
            value={6}
            onClick={(e) => {
              setSelectNum(e.target.value);
            }}
            className={Number(selectNum) === 6 ? `${styles.active}` : ""}
          >
            6
          </button>
          {selectNum ? <h4>Select Dice</h4> : <h4>Select Number</h4>}
        </div>
      </div>

      <div className={styles.display_dice}>
        <div className={styles.dice_img}>
          <img src={imgSrc} alt="" onClick={handleDiceImg} />
          <h4>Click on Dice to roll</h4>
        </div>
        <div>
          <button
            className="btn-light"
            onClick={() => {
              setScore(0);
            }}
          >
            Reset Score
          </button>
        </div>
        <div>
          <button
            className="btn-dark"
            onClick={() => {
              setShowRule(!showRule);
            }}
          >
            Show Rules
          </button>
        </div>
        {showRule && (
          <div className={styles.showRuleDiv}>
            <h3>How to play dice game</h3>
            <p>- Select any number</p>
            <p>- Click on dice image</p>
            <p>
              - after click on dice if selected number is equal to dice number
              you will get same point as dice
            </p>
            <p>- if you get wrong guess then 2 point will be dedcuted</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default index;
