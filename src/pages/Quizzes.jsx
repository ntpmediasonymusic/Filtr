import { useEffect } from "react";
import Quiz from "../components/Quiz";
import useSortedQuizzes from "../hooks/useSortedQuizzes";

const Quizzes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedQuizzes = useSortedQuizzes();
  return (
    <div className="flex flex-col gap-[50px] md:gap-[100px] px-6 py-[50px] md:py-[100px]">
      {sortedQuizzes.map((quiz) => (
        <Quiz key={quiz.QuizName} {...quiz} />
      ))}
    </div>
  );
};

export default Quizzes;
