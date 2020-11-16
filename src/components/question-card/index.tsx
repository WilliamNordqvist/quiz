import React, { useContext, useState } from "react";
import { QuizContext } from "../../context";
import { Question } from "./style";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    value?: string;
    answer?: string;
    showAnswer?: boolean;
    item?: string;
  }
}

export const QuestionCard: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const context = useContext(QuizContext);
  const {
    AllQuestions,
    Number,
    QuizData,
    NextQuestion,
    Points,
    Addpoint,
  } = context;
  
  let { answer } = QuizData[Number];

  const makeGuess = (item: string) => {
    if (item === answer) {
      Addpoint();
    }
    setShowAnswer(true);
    setTimeout(() => {
      NextQuestion();
      setShowAnswer(false);
    }, 1000);
  };

  return (
    <div className="box-container">
      <h1
        className="title"
        dangerouslySetInnerHTML={{ __html: AllQuestions[Number].question }}
      />
      <div className="box flex">
        {AllQuestions[Number].answers.map((item: string, i) => {
          return (
            <Question
              showAnswer={showAnswer}
              answer={answer}
              item={item}
              onClick={showAnswer ? () => {} : () => makeGuess(item)}
              value={item}
              key={i}
              
            >
              <p dangerouslySetInnerHTML={{ __html: item }}/>
            </Question>
          );
        })}
      </div>

      <p>
        Score: {Points} / {QuizData.length}
      </p>
    </div>
  );
};
