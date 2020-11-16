import React, { useContext } from "react";
import { QuizContext } from "./context";
import { QuestionCard } from "./components/question-card";
import { Gameover } from "./components/gameOver";
import { ErrorComponent } from "./components/error";
// import { GlobalStyle } from "./style";
import { Loader } from "./components/loader";
import './style.css'

const App: React.FC = () => {
  const context = useContext(QuizContext);
  const { GameOver, Loading, Error } = context;

  return (
    <>
      <div className="App">
        {!Loading && !GameOver && !Error && <QuestionCard />}
        {GameOver && <Gameover />}
        {Loading && <Loader />}
        {Error && <ErrorComponent />}
      </div>
      {/* <GlobalStyle /> */}
    </>
  );
};

export default App;
