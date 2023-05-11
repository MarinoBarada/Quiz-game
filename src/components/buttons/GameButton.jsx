import stil from "./Button.module.css";

function GameButton({action, text}) {
  return (
    <button className={stil.main} onClick={action}>{text}</button>
  )
}

export default GameButton