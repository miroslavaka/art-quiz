import React, { useState } from 'react';

import './style.css';

const Questions = ({ question }) => {
  const [currentQuestion, setCurrentquestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [i, setI] = useState(0);

  const handleClick = (isCorrect) => {
    if (isCorrect === true) {
      alert('answer is correct');
      setI(i + 1);
      console.log(`i: ${i}`);
    }
    {
      currentQuestion != question.length - 1
        ? setCurrentquestion(currentQuestion + 1)
        : setShowScore(true);
    }
    console.log(`current question: ${currentQuestion}`);
  };

  return (
    <main>
      {/* <div className="skew"></div> */}
      {showScore === true ? (
        <div className="score-section">
          <p>
            Your score: {i} correct questions from {question.length}
          </p>
        </div>
      ) : (
        <>
          <h4>Questions:</h4>
          <div className="questions">
            {/* <div className="question-section">
              <div className="question"> */}
            <div className="question-text">
              <p className="question-p">
                {question[currentQuestion].questionText}
              </p>
            </div>
            <div className="question-photo">
              <img
                className="question-img"
                src={question[currentQuestion].questionImage}
                width={250}
                alt=""
              />
            </div>
            {/*  </div>
            </div> */}
            <div className="answer-section">
              {question[currentQuestion].answerOptions.map((element) => (
                <div className="answer" key={element.answerText}>
                  <button
                    className="answer-btn"
                    onClick={() => handleClick(element.isCorrect)}
                  >
                    {element.answerText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
};
export default Questions;
