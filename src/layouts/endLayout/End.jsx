import React from "react";
import QuizHead from "../../components/containers/QuizHead";
import GameButton from "../../components/buttons/GameButton";
import stil from './End.module.css';

function End(props) {
  return (
    <>
      <QuizHead score={props.score} id={props.id} number={props.number} />
      <div className={stil["restart-div"]}>
        <GameButton action={props.action} text="PLAY AGAIN"/>
      </div>
    </>
  );
}

export default End;
