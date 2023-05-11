import Category from "../../components/inputs/Category";
import React from "react";
import Difficulty from "../../components/inputs/Difficulty";
import Number from "../../components/inputs/Number";
import GameButton from "../../components/buttons/GameButton";
import stil from './Start.module.css';

function Start(props) {
  return (
    <div className={stil["form"]}>
      <Category value={props.category} action={props.action1} />
      <Difficulty value={props.difficulty} action={props.action2} />
      <Number value={props.number} action={props.action3} />
      <GameButton action={props.action4} text="START GAME" />
    </div>
  );
}

export default Start;
