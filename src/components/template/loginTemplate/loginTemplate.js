import React from "react";
import {  Label,Link ,Button } from "../../atoms";

import{LoginForm} from "../../organisms";
import "./loginForm.css";



export const LoginTemplate = ({ loginTemplateProps }) => {
  const {   labelProps,linkProps ,buttonProps, LoginFormProps } = loginTemplateProps;
  return (
    <div className="col-md-12 align-middle login-page-container">
     <div className="col-md-4  login-left-side-container"></div>
     <div id="box" className="col-md-8 login-form-container">
        <div id="box" className="col-md-12 login-box login-page">
          <div className="login-frame">
          <h2 className="login-frame-header">comment voulez connecter</h2>
          <LoginForm {...LoginFormProps} />
          <div className="separator row">
                <div className="line"></div>
                <Label {...labelProps}/>
                <div className="line"></div>
              </div>
          </div>
          
        <div className="row parent-btn">
            
            <div className="col-md-6 btn-fc-container text-center  ">
            <Button {...buttonProps}/>
            </div>
            
            <div className="col-md-6 btn-tw-container text-center">
            <Button {...buttonProps}/>
            </div>
        </div>
        <div className="register-pwd-container">
            <div className="">
                <Link {...linkProps} />
            </div>
            <div>
                <p>Vous n'avez pas de compte ?</p>
                <Link {...linkProps}/>
                  
            </div>
        </div>
           
         
    </div>
     </div>
    </div>
  );
};
