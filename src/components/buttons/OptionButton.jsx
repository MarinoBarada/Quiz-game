import stil from "./Button.module.css";

function OptionButton({ action, color, element,key}) {
  return (
    <button
      key={key}
      className={stil.option}
      onClick={action}
      style={{ backgroundColor: color }}
    >
      {element}
    </button>
  );
}

export default OptionButton;
