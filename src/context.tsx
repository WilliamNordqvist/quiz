import React, { createContext, useState, useEffect } from "react";
import { fetchQuiz, QuizObj } from "./fetch";
import { RandomizeQuestion } from "./helpers";

type ContextProps = {
  QuizData: QuizObj[];
  Loading: boolean;
  AllQuestions: { question: string; answers: string[] }[];
  Number: number;
  Points: number;
  Addpoint: () => void;
  GameOver: boolean;
  NextQuestion: () => void;
  NewGame: () => void;
  Error: boolean;
};

export const QuizContext = createContext<ContextProps>({
  QuizData: [],
  Loading: true,
  AllQuestions: [],
  Number: 0,
  Points: 0,
  Addpoint: () => {},
  GameOver: false,
  NextQuestion: () => {},
  NewGame: () => {},
  Error: false,
});

export const ContextProvider: React.FC = ({ children }) => {
  const [quizData, setQuizData] = useState<QuizObj[]>([]);
  const [loading, setLoading] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [number, setNumber] = useState(0);
  const [points, setPoints] = useState(0);
  const [error, setError] = useState(false);
  const [allQuestions, setAllQuestions] = useState<
    { question: string; answers: string[] }[]
  >([]);

  const nextQuestion = () => {
    if (number < quizData.length - 1) {
      setNumber(number + 1);
    } else {
      setGameOver(true);
    }
  };

  const Addpoint = () => {
    setPoints(points + 1);
  };

  const NewGame = () => {
    setLoading(true);
    setTimeout(async () => {
      setGameOver(false);
      setNumber(0);
      setPoints(0);
      try {
        const result = await fetchQuiz();
        setQuizData(result);
        const getAllQuestions = await RandomizeQuestion(result);
        setAllQuestions(getAllQuestions);
      } catch (err) {
        setError(true);
      }

      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    NewGame();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        QuizData: quizData,
        Loading: loading,
        AllQuestions: allQuestions,
        Number: number,
        Points: points,
        Addpoint: () => Addpoint(),
        GameOver: gameOver,
        NextQuestion: () => nextQuestion(),
        NewGame: () => NewGame(),
        Error: error,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
