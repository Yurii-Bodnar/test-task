import { quiz } from "../db.js";

const questionnaire = (quiz) => {
  const valuesOfQuizForCheck = Object.values(quiz);
  if (valuesOfQuizForCheck.length === 0) {
    throw Error("There is no data to poll");
  }
  let firstId = 0;
  let list = findPath(quiz[firstId], firstId, quiz);
  return { paths: { number: list.length, list } };
};
const findPath = (questionAndAnswer, id, quiz) => {
  let result = [];
  for (let answer of questionAndAnswer.answers) {
    const dataListAnsAndQuiz = {
      question: questionAndAnswer.q,
      answer: answer.answer,
      id: id,
    };

    if (answer.nextIdQues) {
      let subResult = findPath(
        quiz[answer.nextIdQues],
        answer.nextIdQues,
        quiz
      );
      for (let ansQues of subResult) {
        let finishRes = [dataListAnsAndQuiz, ...ansQues];
        result.push(finishRes);
      }
    } else {
      result.push([dataListAnsAndQuiz]);
    }
  }
  return result;
};
console.log("TASK-4: ", questionnaire(quiz));
