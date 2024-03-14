import "./button.css";

export const Button = ({ id,name,onClick, labelButton, styleType ,type}) => {
  return (
    <button
    {...(type &&{ type})}
    {...(id && {id})}
    {...(name && {name})}
      onClick={onClick}
      className={`button ${styleType}`}
    >
      {labelButton}
    </button>
  );
};