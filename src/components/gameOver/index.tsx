import React, { useContext } from "react";
import { QuizContext } from "../../context";
import { Icon } from "../icon";
import { GameOverStyle } from "./style";

export const Gameover: React.FC = () => {
  const context = useContext(QuizContext);
  const { AllQuestions, Points, NewGame } = context;

  return (
    <div className="box-container">
      <div className="box">
        <GameOverStyle>
          <Icon type={`${Points === AllQuestions.length ? "win" : "lose"}`} />
          <p className="final-score">
            You scored {Points} / {AllQuestions.length}
          </p>
          <button onClick={() => NewGame()}> Play again </button>
        </GameOverStyle>
      </div>
    </div>
  );
};
