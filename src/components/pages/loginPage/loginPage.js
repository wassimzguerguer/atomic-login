import { LoginTemplate } from "../../template";
import "./login-page.css";


export const PageForm = (loginPageProps ) => {
  const {pageFormProps,styleType } = loginPageProps;
  return (
    < div className="id="login-page">
    
      <div className="col-md-12 align-middle login-page-container">
        <LoginTemplate  {...loginTemplateProps}/>
      <div>
      </div>
  );
};
