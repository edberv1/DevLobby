import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './QuestionCodeEditor.scss';
import CodeEditor from './CodeEditor';
import { mockQuestions } from './data';

function ChallengeCode() {
  const [question, setQuestion] = useState(null);
  const [showQuestion, setShowQuestion] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const questionId = Number(id);
    const currentQuestion = mockQuestions.find(q => q.id === questionId);
    setQuestion(currentQuestion);
  }, [id]);

  const handleNextQuestion = () => {
    const currentId = Number(id);
    const nextId = currentId + 1;
    const nextQuestionExists = mockQuestions.some(q => q.id === nextId);

    if (nextQuestionExists) {
      navigate(`/playcodearena/practical/challenge-code/${nextId}`);
    } else {
      console.log('No more questions.');
    }
  };

  return (
    <div className="code-container">
      <div className="left">
        {showQuestion && question ? (
          <>
            <h2>{question.name}</h2>
            <p>{question.content}</p>
            <p>{question.difficulty}</p>
          </>
        ) : (
          <p>Loading question...</p>
        )}
      </div>
      <div className="right-side">
        <CodeEditor
          handleNextQuestion={handleNextQuestion}
          question={question ? question.content : ''}
          showQuestion={showQuestion}
          setShowQuestion={setShowQuestion}
        />
      </div>
    </div>
  );
}

export default ChallengeCode;
