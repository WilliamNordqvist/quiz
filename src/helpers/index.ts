import { QuizObj } from "../fetch";

export const RandomizeQuestion = async (data: QuizObj[]) => {
  let questions: { question: any; answers: any[] }[] = data.map((i) => {
    return {
      question: i.question,
      answers: [i.answer, ...i.incorrect_answers].sort(
        () => 0.5 - Math.random()
      ),
    };
  });
  return questions;
};
