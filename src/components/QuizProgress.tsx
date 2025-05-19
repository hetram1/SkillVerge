
import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { Progress } from '@/components/ui/progress';

const QuizProgress: React.FC = () => {
  const { currentQuiz, currentQuestion, userAnswers } = useQuiz();
  
  if (!currentQuiz) return null;
  
  const totalQuestions = currentQuiz.questions.length;
  const answeredQuestions = Object.keys(userAnswers).length;
  const progressPercentage = (currentQuestion / (totalQuestions - 1)) * 100;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2 text-sm">
        <div>
          Question {currentQuestion + 1} of {totalQuestions}
        </div>
        <div>
          {answeredQuestions} answered
        </div>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  );
};

export default QuizProgress;
