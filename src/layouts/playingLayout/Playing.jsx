import React from "react";
import QuizHead from "../../components/containers/QuizHead";
import OptionButton from "../../components/buttons/OptionButton";
import stil from './Playing.module.css';

function Playing(props) {
  return (
    <>
      <QuizHead score={props.score} id={props.id} number={props.number} />
      <div className={stil["quiz-body"]}>
        {props.loading && (
          <h2 className={stil["quiz-question"]}>{props.HTMLDecode(props.question)}</h2>
        )}
        <div className={stil["quiz-options"]}>
          {props.optionsList.map((element) => (
            <OptionButton
              action={props.action}
              color={props.color(props.HTMLDecode(element))}
              element={props.HTMLDecode(element)}
              key={element}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Playing;
