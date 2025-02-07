import { useMemo } from "react";
import quizzesData from "../data/quizzes.json"; 

const useSortedQuizzes = () => {
  const sortedQuizzes = useMemo(() => {
    return [...quizzesData.quizzes].sort((a, b) => a.priority - b.priority);
  }, []);

  return sortedQuizzes;
};

export default useSortedQuizzes;
