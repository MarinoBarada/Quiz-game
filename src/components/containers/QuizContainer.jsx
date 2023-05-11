import stil from './Quiz.module.css';

function QuizContainer(props) {
  return (
    <div className={stil["quiz-container"]}>
      {props.children}
    </div>
  );
}

export default QuizContainer;
