
import React, { createContext, useContext, useState } from 'react';
import { Quiz, Question } from '../data/quizData';

interface QuizContextProps {
  currentQuiz: Quiz | null;
  currentQuestion: number;
  userAnswers: Record<number, number>;
  quizStarted: boolean;
  quizFinished: boolean;
  score: number;
  setCurrentQuiz: (quiz: Quiz) => void;
  startQuiz: () => void;
  answerQuestion: (questionId: number, answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  finishQuiz: () => void;
  restartQuiz: () => void;
  returnToHome: () => void;
}

const QuizContext = createContext<QuizContextProps | undefined>(undefined);

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setUserAnswers({});
    setQuizFinished(false);
    setScore(0);
  };

  const answerQuestion = (questionId: number, answerIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }));
  };

  const nextQuestion = () => {
    if (currentQuiz && currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const calculateScore = () => {
    if (!currentQuiz) return 0;
    
    let correctAnswers = 0;
    currentQuiz.questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    
    return correctAnswers;
  };

  const finishQuiz = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setQuizFinished(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers({});
    setQuizFinished(false);
    setScore(0);
    setQuizStarted(true);
  };

  const returnToHome = () => {
    setCurrentQuiz(null);
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestion(0);
    setUserAnswers({});
    setScore(0);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuiz,
        currentQuestion,
        userAnswers,
        quizStarted,
        quizFinished,
        score,
        setCurrentQuiz,
        startQuiz,
        answerQuestion,
        nextQuestion,
        previousQuestion,
        finishQuiz,
        restartQuiz,
        returnToHome,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};
