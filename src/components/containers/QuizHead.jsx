import stil from './Quiz.module.css';

function QuizHead({score, id, number}) {
  return (
      <div className={stil.info}>
        <div className={`${stil.score} ${stil.flex}`}>
          <span>Score: {score}</span>
        </div>
        <div className={`${stil.score} ${stil.flex}`}>
          <span>Question: {id + 1}</span>/
          <span >{number}</span>
        </div>
      </div>
  );
}

export default QuizHead;
