import React from 'react';
import './label.css'; 

export const Label = ({ labelProps }) => {
  const{id,text, styleType}=labelProps
  return (
    <label
    id={id}
     className={styleType}>
      {text}
    </label>
  );
};

