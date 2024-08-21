import React, { useState } from "react";
import PollQuestion from "./components/PollQuestion";
import Summary from "./components/Summary/Summary";
import { questions } from "./components/questions";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (answer) => {
    const question = questions[currentQuestion].question;
    setAnswers((prevAnswers) => ({ ...prevAnswers, [question]: answer }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion + 1); // Moving the summary tO display
    }
  };

  const handleSubmit = () => {
    setCurrentQuestion(0);
    setAnswers({});
  };

  return (
    <div>
      {currentQuestion < questions.length ? (
        <PollQuestion
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <Summary answers={answers} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
