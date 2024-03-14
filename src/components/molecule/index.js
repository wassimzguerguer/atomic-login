import {Text,Input} from '../atoms'
export const InputText = ({ id, name, href, label, styleType, type }) => {
  return (
    <div className="form-group">
      <Text className="login-textbox-header">E-mail</Text>
      <div className="parent-input">
        <Input type="email" className="login-textbox" />
      </div>
    </div>
  );
};
