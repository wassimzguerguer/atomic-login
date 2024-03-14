import "./link.css";
export const Link = ({ id,name,href, labelLink, styleType ,type}) => {
    return (
      <a
      {...(type &&{ type})}
      {...(id && {id})}
      {...(name && {name})}
        href={href}
        className={`a ${styleType}`}
      >
        {labelLink}
      </a>
    );
  }