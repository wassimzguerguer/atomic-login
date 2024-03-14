import "./text.css";
export const Text = ({ styleType,labelText}) => {
    return (
      <title
      className={`title ${styleType}`}
      >
        {labelText}
      </title>
    );
  };