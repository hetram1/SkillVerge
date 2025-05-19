import React from "react";
import { Link } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

const Header: React.FC = () => {
  const { returnToHome, quizStarted, currentQuiz } = useQuiz();

  return (
    <header className="border-b mb-8">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-primary hover:opacity-90 transition-opacity"
          onClick={quizStarted ? returnToHome : undefined}
        >
          SkillVerge
        </Link>
      </div>
    </header>
  );
};

export default Header;
