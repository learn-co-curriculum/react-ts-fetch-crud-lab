import React from "react";
import { QuizQuestion } from "../data/types";

interface Props {
  question: QuizQuestion;
  onDeleteClick(id: number): void;
  onAnswerChange(id: number, correctIndex: number): void;
}

function QuestionItem({ question, onDeleteClick, onAnswerChange }: Props) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDeleteClick() {
    onDeleteClick(id);
  }

  function handleAnswerChange(event: React.ChangeEvent<HTMLSelectElement>) {
    onAnswerChange(id, parseInt(event.target.value));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
