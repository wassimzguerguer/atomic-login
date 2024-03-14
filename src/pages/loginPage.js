import "./loginPage.css";
import {  Link, Button, Input } from "../components/atoms";
import { useDispatch } from 'react-redux';
import { changeEmail,changePassword,isLogin} from '../store/index';
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleEmailChange = (event) => {
    dispatch(changeEmail(event.target.value));
  };
  const handlePasswordChange = (event) => {
    dispatch(changePassword(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(isLogin());
    navigate('/home'); 
    
  };
 
 
  return (
    <div id="warp">
      <div className="col-md-12 align-middle login-page-container">
        <div className="col-md-4  login-left-side-container"></div>
        <div id="box" className="col-md-8 login-form-container">
          <div id="box" className="col-md-12 login-box login-page">
            <div className="login-frame">
            <h2 className="login-frame-header">comment voulez connecter</h2>
              <form className="form" onSubmit={handleSubmit}>
                <fieldset>
                  <div className="form-group">
                  <div className="login-textbox-header">E-mail</div>
                    <div className="parent-input">
                      <Input
                        id="email"
                        type="email"
                        onChange={handleEmailChange}
                        styleType="login-textbox input"
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    
                  <div className="login-textbox-header">mot de passe</div>
                    <div className="parent-pwd">
                      <Input
                        type="password"
                        id="pwd"
                        onChange={handlePasswordChange}
                        styleType="login-textbox"
                        placeholder="votre mot de passe"
                        required
                      />
                    </div>
                    <div className="login-forgot-password">
                      <Link
                        href="https://app.metricool.com"
                        styleType="login-forgot-password"
                        labelLink="jai oublier mon mot passe"
                      />
                    </div>
                  </div>

                  <div className="login-button-container">
                    <Button
                      styleType="buttonLoginHome"
                      labelButton="Se connecter"
                    />
                  </div>
                </fieldset>
              </form>
              <div className="separator row">
                <div className="line"></div>
                <div className="ou">ou</div>
                <div className="line"></div>
              </div>
              <div className="row" id="btn-fc">
                <div className="col-md-6 div-btn-fc ">
                  <form className="form">
                    <Button
                      StyleType="button col-md-6 button-facebook btn btn-facebook-login"
                      labelButton="Continuer avec facebook"
                    />
                  </form>
                </div>
                <div className="col-md-6 div-btn-tw ">
                  <form className="form">
                    <Button
                      labelButton="Connecter avec Twitter"
                      styleType=" button col-md-6 btn-tw btn btn-twitter-login"
                    />
                  </form>
                </div>
              </div>
              <br />
              <div className="register">
              <p className="register">Vous n'avez pas de compte </p>


                <Link
                  href="https://chat.openai.com"
                  labelLink="Créer un compte"
                  styleType="register-link"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export  default LoginPage; 