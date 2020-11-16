import axios from "axios";

export type QuizObj = {
  question: string;
  incorrect_answers: string[];
  answer: string;
  correct_answer?: string;
  error?:number;
};

export const fetchQuiz = async () => {
  
  const response = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=easy"); 
  // let checkError:boolean = response.data.response_code === 0 ? false : true;
   const questionArr: QuizObj[] = await response.data.results.map((item: QuizObj) => {
    return {
      question: item.question,
      incorrect_answers: item.incorrect_answers,
      answer: item.correct_answer,
      // error:checkError,
      
    };
  });
  return questionArr
};
