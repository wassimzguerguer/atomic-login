import "./input.css";
export const Input = (props) => {
    const {required, type, id, name, onChange, placeholder, styleType,labelInput} = props
    const  className = []
    
   
  return (
        <input
          {...(type && {type})}
          {...(id && {id})}
          {...(name && {name})}
          {...(labelInput && {labelInput})}
          {...(onChange && {onChange})}
          {...(placeholder && {placeholder})}
          {...(required && {required})}
          className={styleType}
         //{...(styleType && {styleType})}
         
          
        />
    
  );
}
